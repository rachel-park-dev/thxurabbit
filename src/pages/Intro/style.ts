import { css } from '@emotion/react';

export const container = css`
  width: 360px;
  position: relative;
  font-family: 'Galmuri9';
  font-weight: 400;
`;

export const headerWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 55px;
  border-radius: 0px;
  background: #1c1c1e;
  color: #ffffff;
`;

export const headerContents = css`
  padding: 0 14px;
`;

export const bgWrap = css`
  background: #ffa216;
  padding: 16px 16px 28px;
  margin-bottom: 20px;
`;

export const titleWrap = css`
  padding-top: 12px;
  text-align: center;
  line-height: 31.2px;
  h3 {
    font-size: 18px;
  }
  h1 {
    font-size: 24px;
  }
`;
export const rabbitWrap = css`
  position: relative;
`;

export const rabbitImg = css`
  padding-top: 24px;
  padding-bottom: 16px;
  display: block;
  margin: 0 auto;
`;
export const rabbitContents = css`
  border: 2px solid #111111;
  padding: 26px 34px 26px 17px;
  font-size: 14px;
  text-align: center;
  line-height: 21px;
  background: #fff;
`;

export const downImg = css`
  position: absolute;
  top: 178px;
  right: 18px;
`;

export const introWrap = css`
  padding: 16px;
  text-align: center;
`;

export const contentsWarp = css`
  padding-bottom: 32px;
  h3 {
    padding: 8px 0;
    font-size: 18px;
    line-height: 27px;
  }
  p {
    line-height: 21px;
    font-size: 14px;
  }
`;

export const contentsSubTitle = css`
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 8px;
`;

export const btnWrap = css`
  .blackBtn {
    background: #111;
    color: #fff;
  }
  padding-bottom: 10px;
`;

export const btnLg = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border: 1px solid #111;
  height: 40px;
  cursor: pointer;
`;

export const highlight = css`
  display: inline-block;
  box-shadow: inset 0 -10px 0 #dadada;
`;

export const inquiryEmail = css`
  padding-top: 40px;
  color: #7a7a7a;
`;
