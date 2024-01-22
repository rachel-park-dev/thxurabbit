import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppState } from "@/contexts/Context";
import UserService from "@/services/user-service";
import MessageService from "@/services/message-service";
import { parsedToken } from "@/utils/utils";

import * as styles from "./style";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import BubbleMessage from "@/components/BubbleMessage";
import Button from "@/components/Button";
import Popup from "@/components/Popup";
import { GuideModal } from "./GuideModal";

import writeCardRabbit from "@/assets/images/writeCardRabbit.png";

export type messageCardProps = {
  sender: string | undefined;
  title: string | undefined;
  receiver: string | undefined;
  content: string | undefined;
};

const WriteThanks = () => {
  const navigate = useNavigate();
  const params = useParams();
  const state = useAppState();
  const dispatch = useAppDispatch();

  const { postMessage } = MessageService;
  const { findUserId } = UserService;

  const [senderName, setSenderName] = useState("");
  const [receiverID, setReceiverID] = useState("");
  const [clicked, setClicked] = useState(false);
  const [guideClicked, setGuideClicked] = useState(false);
  const [cardText, setCardText] = useState("");
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [messageCard, setMessageCard] = useState<messageCardProps>({
    sender: "",
    title: "",
    receiver: "",
    content: "",
  });

  const userData = parsedToken();

  useEffect(() => {
    dispatch({ type: "SET_USER_DATA", userData: userData });
  }, []);

  useEffect(() => {
    dispatch({ type: "SET_RECEIVER_NAME", receiverName: params.userName });
  }, []);

  const token = sessionStorage.getItem("tt");

  useEffect(() => {
    if (token) {
      dispatch({ type: "TOGGLE_POPUP", isPopup: false });
    } else {
      dispatch({ type: "TOGGLE_POPUP", isPopup: true });
    }
  }, [token]);

  useEffect(() => {
    //receiver의 id 조회
    if (!state.receiverName) return;

    findUserId(state.receiverName)
      .then((res) => {
        setReceiverID(res.data.userID);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("해당 유저를 찾을 수 없습니다.");
          navigate("/");
        }
      });
  }, [state.receiverName]);

  useEffect(() => {
    //sender name 조회
    if (userData) {
      UserService.read(userData.user_id).then((res) =>
        setSenderName(res.username)
      );
    }
  }, [messageCard, dispatch]);

  //메세지 글자수 세기
  const countCardText = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    const target = event.target as HTMLTextAreaElement;
    setCardText(target.value);

    if (cardText.length >= 280) {
      alert("글자수는 280자를 초과할 수 없습니다.");
    }
  };

  //카테고리 활성화하기
  const activeCategory = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const category = event.currentTarget.dataset["index"];
    setCategoryIdx(Number(category));
  };

  //메세지 정보 담기
  const setMessageCardTotalInfo = () => {
    if (state.userData.user_id === receiverID) {
      alert("자기자신에게 감사를 남길 수 없습니다.");
      navigate("/check");
    }
    setMessageCard({
      ...messageCard,
      sender: state.userData.user_id,
      title: CATEGORIES_ENG[categoryIdx],
      receiver: receiverID,
      content: cardText,
    });

    return messageCard;
  };

  const onSubmit = (token: string, messageCard: messageCardProps) => {
    postMessage(token, messageCard)
      .then(() => navigate("/share"))
      .catch((err) => {
        if (err.response.status === 400) {
          alert("감사남기기는 유저당 한번만 가능합니다.");
        } else if (err.response.status === 401) {
          alert("감사남기기는 회원가입 후 가능 합니다.");
          navigate("/register");
        }
      });
  };

  return (
    <>
      <Layout>
        {state.isPopup && (
          <Popup
            width="296px"
            className="goToLogin"
            buttonCancel="로그인 하기"
            buttonConfirm="헉.. 이사람에게 그 정도 진심은 아냐"
            onCancel={() => {
              dispatch({ type: "TRY_SIGNIN_WRITECARD", signInWriteCard: true });
              navigate("/login");
            }}
            onConfirm={() => dispatch({ type: "TOGGLE_POPUP", isPopup: false })}
          >
            로그인 해야만 메시지를 남길 수 있어!
            <br />
            3초면 되는 회원가입을 해줘&nbsp;(깡총)
          </Popup>
        )}
        <Header />
        <img
          src={writeCardRabbit}
          alt="writeCardRabbit"
          css={styles.writeCardImg}
        />
        <BubbleMessage style={{ fontSize: "16px" }}>
          {state.receiverName}에게 남길
          <br />
          감사 카테고리를 선택해보자!&nbsp;(깡총)
        </BubbleMessage>
        <p
          css={styles.guideText}
          onClick={() => setGuideClicked(!guideClicked)}
        >
          이게 뭐하는 건데?
        </p>
        {guideClicked && (
          <GuideModal
            guideClicked={guideClicked}
            setGuideClicked={setGuideClicked}
          />
        )}
        <div css={styles.categoriesWrapper}>
          {CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              id="category"
              css={styles.category(categoryIdx)}
              data-index={idx}
              onClick={(e) => {
                activeCategory(e);
              }}
            >
              {category}
            </div>
          ))}
        </div>
        <p css={styles.comment}>{MESSAGES[categoryIdx]}</p>
        <div css={styles.writeCardWrapper}>
          <div css={styles.writeCardBox}>
            <p>
              To.{" "}
              <span>{state.receiverName ? state.receiverName : "나"}에게</span>
            </p>
            <textarea
              placeholder="*이 메세지는 1월 1일에 공개됩니다. *감사 메세지 한건당 10만원으로 정산됩니다. 최대 280자 (560byte)"
              css={styles.writeCardArea}
              readOnly={cardText.length === 280}
              onKeyUp={(e) => countCardText(e)}
            />
            <p style={{ textAlign: "right" }}>
              From.<span>{senderName ? senderName : "친구"}가</span>
            </p>
          </div>
        </div>
        <p css={styles.countText}>
          (<span className="count">{cardText.length}</span>&#47;280)
        </p>
        <div style={{ marginBottom: "40px" }}>
          <Button
            width="328px"
            color="#dadada"
            css={styles.writeCareBtn}
            className={cardText.length > 0 ? "active" : ""}
            onClick={() => {
              if (cardText.length > 0) {
                setClicked(true);
                dispatch({ type: "TOGGLE_POPUP", isPopup: false });
                setMessageCardTotalInfo();
              }
              if (!token) dispatch({ type: "TOGGLE_POPUP", isPopup: true });
            }}
          >
            감사메세지 남기기
          </Button>
          <Button
            width="328px"
            color="white"
            css={styles.writeCareBtn}
            className="homeBtn"
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로 돌아가기 &gt;
          </Button>
        </div>
        {clicked && (
          <Popup
            width="296px"
            className="goToShare"
            buttonCancel="안돼 잠깐만!"
            buttonConfirm="응 괜찮아!"
            onCancel={() => setClicked(false)}
            onConfirm={() => {
              if (token) {
                onSubmit(token, messageCard);
              }
            }}
          >
            이 버튼을 누르면 수정할 수 없어!
            <br />
            그래도 괜찮아?(깡총)
          </Popup>
        )}
      </Layout>
    </>
  );
};

export default WriteThanks;

export const CATEGORIES = [
  "감사",
  "사랑",
  "도움",
  "응원",
  "위로",
  "존경",
  "존재",
  "그냥",
];
export const CATEGORIES_ENG = [
  "thanks",
  "love",
  "help",
  "comfort",
  "cheering",
  "respect",
  "existence",
  "just",
];

const MESSAGES = [
  "모든 감사의 마음을 전할 수 있어 (깡총)",
  "사랑의 마음을 담아 감사를 전해 (깡총)",
  "도움을 받아 감사했던 마음을 전하자 (깡총)",
  "응원 덕에 든든했던 감사의 마음을 표현하자 (깡총)",
  "너의 위로 덕분에 이겨낼 수 있었다구 (깡총)",
  "존경과 감사를 담아서 마음을 전해보자 (깡총)",
  "당신의 존재 자체로 감사해요 (깡총)",
  "그냥… 모든 것들이 다 감사할 때 (깡총)",
];
