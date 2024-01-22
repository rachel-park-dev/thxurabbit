import { css } from '@emotion/react';
import closeRed from '@/assets/icon/ico_close_red.svg';
import check from '@/assets/icon/ico_check.svg';

/**
 *  회원가입 스타일
 */

export const title = css`
  line-height: 36px;
  font-size: 24px;
  height: 72px;
  padding: 58px 0 8px 16px;
`;

export const closeBtn = css`
  position: absolute;
  width: 12.73px;
  height: 12.73px;
  top: 63.64px;
  right: 21.64px;
`;

export const formStyle = css`
  padding-left: 16px;
  font-size: 16px;
  .inputError {
    border-color: red;
  }
  .registerBtnStyle {
    margin: 0;
    padding: 0;
    margin-top: 80px;
    margin-bottom: 16px;
  }
  .active {
    background: #111;
    color: #fff;
  }
`;

export const subTitle = css`
  width: 103px;
  height: 18px;
  padding-top: 32px;
  padding-bottom: 24px;
  font-size: inherit;
`;

export const inputUserNameStyle = (error: boolean) => css`
  font-family: 'Galmuri9';
  font-weight: 400;
  width: 328px;
  height: 27px;
  border: none;
  border-bottom: 1px solid #dadada;
  font-size: inherit;
  line-height: 17.6px;
  ::placeholder {
    color: #dadada;
  }
  :focus {
    border-bottom: ${error ? '1px solid ff5d5d' : '1px solid #111'};
  }
`;
export const inputPwdStyle = (error: boolean) =>
  css`
    ${inputUserNameStyle(error)}
  `;

export const inputPwdConfirmStyle = (error: boolean) =>
  css`
    ${inputUserNameStyle(error)}
  `;
// export const submitBtn = css`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   bottom: 16px;
//   display: block;
//   width: 328px;
//   height: 56px;
//   background: #dadada;
//   margin: 0 auto;
//   color: #7a7a7a;
//   font-size: 16px;
//   border: none;
//
//   :hover {
//     background: #111;
//     color: #fff;
//   }
// `;

export const inputValueError = css`
  position: relative;
  margin-top: 8px;
  color: #ff5d5d;
  font-size: 14px;
  line-height: 15px;

  ::after {
    content: '';
    position: absolute;
    top: -30px;
    right: 13px;
    width: 12.73px;
    height: 12.73px;
    background: url(${closeRed}) no-repeat;
  }
`;

export const ok = css`
  position: relative;
  margin-top: 8px;
  color: #35d48d;
  font-size: 14px;
  line-height: 15px;

  ::after {
    content: '';
    position: absolute;
    top: -34px;
    right: 8px;
    width: 26px;
    height: 17px;
    background: url(${check}) no-repeat;
  }
`;

export const guideComment = css`
  color: #7a7a7a;
  padding: 8px 0 16px 16px;
  line-height: 1.5;
`;
