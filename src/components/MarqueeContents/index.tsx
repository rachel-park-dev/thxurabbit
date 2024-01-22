import React from "react";
import { css } from "@emotion/react";
import Marquee from "react-fast-marquee";

const marquee = css`
  padding: 12px 0;
  font-size: 14px;
  border-top: 2px solid #111111;
  border-bottom: 2px solid #111111;
`;
const colorOrange = css`
  color: #ffa216;
`;

const MarqueeContents = () => {
  return (
    <div>
      <Marquee css={marquee} gradient={false}>
        (ㅇ_ㅇ) 최종결과는<p css={colorOrange}>&nbsp;1월 1일</p>에 공개! (ㅇ_ㅇ)
        최종결과는 <p css={colorOrange}>&nbsp;1월 1일</p>에 공개!
      </Marquee>
    </div>
  );
};

export default MarqueeContents;
