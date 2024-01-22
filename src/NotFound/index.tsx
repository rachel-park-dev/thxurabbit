import React from "react";
import { css } from "@emotion/react";
import blackRabbit from "@/assets/images/blackRabbit.png";

export const NotFound = () => {
  return (
    <div css={containerStyle}>
      <img src={blackRabbit} alt="흑토끼" css={imgStyle} />
      <h1>404</h1>
      <p css={textStyle}>
        페이지가 존재하지 않습니다. <br />
        링크를 잘못 입력하셨거나, 페이지가 삭제/이동 되었을 수 있습니다.
        <br />
        지속적인 오류가 발생할 경우{" "}
        <span css={emailStyle}>besidermonster@gmail.com</span>&nbsp; 으로
        연락하여 주세요.
      </p>
    </div>
  );
};

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  margin-top: -24px;

  h1 {
    font-size: 72px;
    font-weight: bold;
    padding: 8px 0;
  }
`;

const imgStyle = css`
  display: block;
  margin-bottom: 16px;
`;

const textStyle = css`
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
`;

const emailStyle = css`
  color: #ffa216;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
