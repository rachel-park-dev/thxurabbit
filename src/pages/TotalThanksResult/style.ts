import { css } from '@emotion/react';
import dropDown from '@/assets/icon/result_category/ico_drop_down.png';

export const titleWrap = css`
  padding-top: 24px;
  text-align: center;
  line-height: 36px;
  font-size: 24px;
  .titleSm {
    font-size: 16px;
  }
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

export const checkResultTotal = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  align-items: center;
  padding: 16px 0;
`;

export const checkResultTotalContents = css`
  font-weight: 400;
  font-size: 18px;
`;

export const coinIcon = css`
  width: 18px;
  height: 18px;
  padding-right: 10px;
`;

export const totalThanksTitleWrap = css`
  display: flex;
  justify-content: space-between;
`;

export const line = css`
  height: 15px;
  background: #f2f2f2;
  margin: 40px 0;
`;

export const thanksMessageWrap = css`
  position: relative;

  .dropbtn {
    position: absolute;
    left: 50px;
    top: 160px;
    border: none;
    background: none;
    cursor: pointer;
  }
  .dropdown-content {
    .category {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      color: #636366;

      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export const subTitleWrap = css`
  line-height: 36px;
  font-size: 24px;

  &.resultPayment {
    border-bottom: 2px solid #111;
  }
  .titleSm {
    font-size: 16px;
  }
  padding-bottom: 16px;
`;

export const borderStyles = css`
  border-top: 2px solid black;
`;
export const footerWrap = css`
  padding: 16px;
`;
export const footerContentsWrap = css`
  text-align: center;
`;

export const footerImg = css`
  padding-top: 24px;
`;
export const footerContents = css`
  padding-top: 29px;
  padding-bottom: 24px;
  line-height: 21px;
  font-size: 14px;
`;
export const gridContainer = css`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  height: 429px;
  overflow: hidden;
  outline: 1px solid red;
`;
export const gridItem = css`
  width: 102.67px;
  height: 143px;
  border: 0.5px solid #d4d4d4;
  padding-top: 30px;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  vertical-align: middle;
`;
