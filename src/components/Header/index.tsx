import React from "react";
import { css } from "@emotion/react";
import whiteRabbit from "@/assets/icon/ico_white_rabbit.svg";

const headerWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 55px;
  border-radius: 0px;
  background: #1c1c1e;
  color: #ffffff;
`;
const headerContents = css`
  padding: 0 14px;
`;

const Header = () => {
  return (
    <div css={headerWrap}>
      <div>
        <img src={whiteRabbit} alt="흰토끼" />
      </div>
      <div css={headerContents}>THANK U RABBIT 2022</div>
      <div>
        <img src={whiteRabbit} alt="흰토끼" />
      </div>
    </div>
  );
};
export default Header;
