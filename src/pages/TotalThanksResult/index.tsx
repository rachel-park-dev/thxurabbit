import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/contexts/Context";
import UserService from "@/services/user-service";
import { parsedToken } from "@/utils/utils";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import ThanksSlider from "@/pages/TotalThanksResult/components/thanksSlider";
import DropDown from "./components/DropDown";

import * as styles from "./style";
import { checkResultPayment, checkResultRow } from "../CheckThanksResult/style";

import totalResultRabbit from "@/assets/images/totalResultRabbit.png";
import totalResultRabbits from "@/assets/images/totalResultRabbits.png";
import BubbleMessage from "@/components/BubbleMessage";
import Coin from "@/assets/icon/ico_coin.svg";
import MessageService from "@/services/message-service";
import axios from "axios";

export type PostPropsType = {
  id: number;
  sender: number;
  title: string;
  recevier: number;
  content: string;
  created_at: string;
  updated_at: string;
  is_opened?: boolean;
  type: string;
};

const CheckThanksResult = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isPlus, setIsPlus] = useState(false);
  const [income, setIncome] = useState(0);
  const [outgo, setOutgo] = useState(0);
  const [sum, setSum] = useState(0);
  const [posts, setPosts] = useState([]);
  let category: string[] = [];

  const userData = parsedToken();
  const token = sessionStorage.getItem("tt");
  const username = sessionStorage.getItem("name");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    dispatch({ type: "SET_USER_DATA", userData: userData });
  }, []);

  useEffect(() => {
    try {
      if (userData) {
        const setData = async () => {
          const data: any = await UserService.read(userData.user_id);
          setIncome(data.income * 100000);
          setOutgo(data.outgo * 100000);
          if (data.income - data.outgo > 0) {
            setIsPlus(true);
          } else {
            setIsPlus(false);
          }
          const settlementAmount = data.income - data.outgo;
          setSum(settlementAmount * 100000);
        };
        setData();
      }
    } catch (err) {
      console.error(err);
    }
  }, [username, income, outgo, sum]);

  useEffect(() => {
    try {
      if (username) {
        const setData = async () => {
          const data = await MessageService.getReceiveMessages(token, username);
          setPosts(data);
        };
        setData();
      }
    } catch (error) {
      console.error(error);
    }
  }, [username, token]);

  category = posts.map((post: PostPropsType) => post.title);

  return (
    <Layout>
      <Header />
      <div css={styles.titleWrap}>
        <div className="titleSm">흑토끼와 함께 하는</div>
        <div>
          2202 감사 연말 정산
          <br />
          최종결과
        </div>
      </div>
      <div>
        <div css={styles.checkResultWrap}>
          <div css={styles.checkResultTotal}>
            <div css={styles.totalThanksTitleWrap}>
              <img src={Coin} alt="동전" css={styles.coinIcon} />
              <p>감사징수</p>
            </div>
            <p css={styles.checkResultTotalContents}>
              +{income ? income.toLocaleString("ko-KR") : 0}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={totalResultRabbit}
          css={styles.rabbitImg}
          alt="최종결과 이미지"
        />
        <BubbleMessage style={{ marginTop: "16px" }}>
          올 한 해 많은 감사를 받았어
          <br />
          그만큼 다른 사람들에게
          <br />
          많은 힘이 되는 사람이라는 뜻이야
          <br />
          <br />
          새해에는 그들에게 도움을 돌려받고
          <br />
          감사를 더 많이 하게 될 거야! (깡총)
          <br />
        </BubbleMessage>
        <div css={styles.line} />
        <div css={styles.thanksMessageWrap} style={{ paddingLeft: "16px" }}>
          <div css={styles.subTitleWrap} className="resultPayment">
            <div className="titleSm">감사 연말정산</div>
            종합 결과
          </div>
          <div css={checkResultRow}>
            <div css={checkResultPayment} style={{ fontSize: "1em" }}>
              지출
            </div>
            <p css={checkResultPayment}>
              {outgo ? outgo.toLocaleString("ko-KR") : 0}원
            </p>
          </div>
          <div css={checkResultRow} style={{ marginBottom: "16px" }}>
            <div css={checkResultPayment} style={{ fontSize: "1em" }}>
              소득
            </div>
            <p css={checkResultPayment}>
              {income ? income.toLocaleString("ko-KR") : 0}원
            </p>
          </div>
          <DropDown category={category} />
        </div>
        <div css={styles.checkResultTotal} style={{ paddingLeft: "16px" }}>
          <p>정산금액</p>
          <p css={styles.checkResultTotalContents}>
            {sum ? (sum > 0 ? "+" : "") + sum.toLocaleString("ko-KR") : 0}원
          </p>
        </div>
        <div css={styles.line} />
        <div>
          <div css={styles.subTitleWrap} style={{ paddingLeft: "16px" }}>
            <div className="titleSm">
              내가 받은 {income / 100000}개의 소중한
            </div>
            감사 메시지
          </div>
          <ThanksSlider />
        </div>
        <div css={styles.line} />
        <div css={styles.footerWrap}>
          <div css={styles.subTitleWrap}>
            <div className="titleSm">흑토끼와 함께</div>
            HAPPY NEW YEAR!
          </div>
          <div css={styles.borderStyles}>
            <div css={styles.footerContentsWrap}>
              <img
                src={totalResultRabbits}
                css={styles.footerImg}
                alt="토끼들"
              />
              <p css={styles.footerContents}>
                2022년 한 해 힘들었던 일도 많았지만 <br />
                누군가에게 감사하고, 감사 받는 한 해를 보냈어 <br />
                2023년도 나 흑토끼와 함께 더욱 <br />
                힘차게 한 해를 보내자! (깡총) <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckThanksResult;
