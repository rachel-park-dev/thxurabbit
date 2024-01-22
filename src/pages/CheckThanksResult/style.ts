import { css } from '@emotion/react';

export const dDayWrap = css`
  position: relative;
  padding-top: 24px;
  display: flex;
  justify-content: center;
`;

export const dDayBombLeft = css`
  position: absolute;
  top: 38px;
  left: 122px;
`;

export const dDayBombRight = css`
  position: absolute;
  top: 38px;
  right: 122px;
`;

export const dDayContents = css`
  font-size: 22px;
  position: absolute;
  top: 40px;
  left: 155px;
`;

export const rabbitImg = css`
  padding-top: 24px;
  padding-bottom: 16px;
  display: block;
  margin: 0 auto;
`;

export const checkResultWrap = css`
  padding: 16px;
`;

export const checkResultTitle = css`
  font-size: 21px;
  line-height: 23.1px;
  padding: 16px 0;
  border-bottom: 2px solid #111;
`;

export const checkResultRow = css`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

export const titleSm = css`
  width: 74px;
  height: 32px;
  background: #f2f2f2;
  text-align: center;
  line-height: 2;
`;

export const checkResultPayment = css`
  font-weight: 400;
  font-size: 18px;
  padding-top: 9px;
`;

export const checkResultTotal = css`
  display: flex;
  justify-content: space-between;
  height: 41px;
  background: #f2f2f2;
  align-items: center;
  padding: 0 16px;
`;

export const checkResultTotalContents = css`
  font-weight: 400;
  font-size: 18px;
`;

export const rabbitCommentWrap = css`
  display: flex;
  justify-content: space-between;
  border: 2px solid #d9d9d9;
  padding: 24px;
`;

export const rabbitComment = css`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

export const btnWrap = css`
  padding-top: 8px;
  padding-bottom: 20px;
`;

export const blackBtn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border: 2px solid #111;
  height: 40px;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;

export const whiteBtn = css`
  ${blackBtn}
  background: white;
  border: none;
  color: #7a7a7a;
`;
