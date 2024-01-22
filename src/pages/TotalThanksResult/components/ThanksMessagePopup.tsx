import React, { useEffect, useState } from "react";
import { PostPropsType } from "..";
import UserService from "@/services/user-service";

import { css } from "@emotion/react";
import Close from "@/assets/icon/ico_close_gray.svg";
import LetterRabbit from "@/assets/icon/ico_letter_rabbit.svg";
import thanksHeart from "@/assets/icon/result_category/heart_thanks.svg";
import loveHeart from "@/assets/icon/result_category/heart_love.svg";
import helpHeart from "@/assets/icon/result_category/heart_help.svg";
import comfortHeart from "@/assets/icon/result_category/heart_comfort.svg";
import cheeringHeart from "@/assets/icon/result_category/heart_cheering.svg";
import respectHeart from "@/assets/icon/result_category/heart_respect.svg";
import existenceHeart from "@/assets/icon/result_category/heart_existence.svg";
import justHeart from "@/assets/icon/result_category/heart_just.svg";
import dayjs from "dayjs";
import MessageService from "@/services/message-service";

type IntrinsicAttributes = /*unresolved*/ any;

export const ThanksMessagePopup = (props: {
  setClicked: IntrinsicAttributes &
    React.Dispatch<React.SetStateAction<boolean>>;
  post: PostPropsType;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const token = sessionStorage.getItem("tt");
  const date = dayjs(props.post.created_at);

  const changeTitleToKo = (title: string) => {
    switch (title) {
      case "thanks":
        return "감사";
      case "love":
        return "사랑";
      case "help":
        return "도움";
      case "comfort":
        return "위로";
      case "cheering":
        return "응원";
      case "respect":
        return "존경";
      case "existence":
        return "존재";
      case "just":
        return "그냥";
      default:
        return "흑토끼";
    }
  };

  const switchCategoryImage = (img: string) => {
    switch (img) {
      case "thanks":
        return `${thanksHeart}`;
      case "love":
        return `${loveHeart}`;
      case "help":
        return `${helpHeart}`;
      case "comfort":
        return `${comfortHeart}`;
      case "cheering":
        return `${cheeringHeart}`;
      case "respect":
        return `${respectHeart}`;
      case "existence":
        return `${existenceHeart}`;
      case "just":
        return `${justHeart}`;
      default:
        return `${justHeart}`;
    }
  };

  const [senderName, setSenderName] = useState("");
  useEffect(() => {
    try {
      const setData = async () => {
        const data: any = await UserService.read(props.post.sender);
        setSenderName(data.username);
      };
      setData();
    } catch (err) {
      console.error(err);
    }
  }, [props.post]);

  return (
    <>
      <div css={modalContainer}>
        <div css={introWrap}>
          <img
            src={Close}
            alt="닫기"
            css={closeBtn}
            onClick={() => {
              // props.setIsOpened(true);
              // MessageService.patchMessage(token, props.post.id, props.isOpened);
              props.setClicked(false);
            }}
          />
          <div css={titleWrap}>
            <img src={LetterRabbit} alt="편지 든 토끼" />
            <div css={titleContents}>
              <h1 css={title}>From {senderName}</h1>
              <p css={dateStyle}>{date.format("YYYY.MM.DD HH:mm:ss")}</p>
            </div>
          </div>
          <div css={line} />
          <div css={messageWrap}>{props.post.content}</div>
          <div css={category}>
            <img
              src={switchCategoryImage(props.post.title)}
              alt="categoryImage"
            />
            <div className="categoryTitle">
              {changeTitleToKo(props.post.title)}
            </div>
          </div>
        </div>
      </div>
      <div css={modalBg} />
    </>
  );
};

export const modalContainer = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 91%;
  padding: 26px 0;
  background: white;
  z-index: 2;
`;

export const closeBtn = css`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;

export const modalBg = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

export const introWrap = css`
  padding: 24px;
`;

export const titleWrap = css`
  display: flex;
  padding-bottom: 24px;
`;

const titleContents = css`
  padding-left: 10px;
  line-height: 18px;
`;

const title = css``;

const dateStyle = css`
  color: #949494;
  font-size: 12px;
`;

const line = css`
  border-top: 1px solid #d9d9d9;
  padding-bottom: 16px;
`;

const messageWrap = css`
  width: 280px;
  height: 290px;
  font-size: 14px;
  line-height: 21px;
  overflow-y: auto;
`;

const category = css`
  display: flex;
  justify-content: right;
  font-size: 14px;

  .categoryTitle {
    padding-left: 6px;
  }
`;

function dispatch(arg0: {
  type: string;
  userData: import("@/utils/utils").userDataProps | undefined;
}) {
  throw new Error("Function not implemented.");
}
