import { css } from '@emotion/react';

export const statusBar = css`
  height: 42px;
`;

export const backButton = css`
  height: 50px;
  padding-left: 24.5px;
  vertical-align: middle;
`;

export const loginImageWrapper = (loginRabbit: string) => css`
  height: 87px;
  margin: 0 auto;
  background: url(${loginRabbit}) no-repeat center;
`;

export const loginTitle = css`
  margin-bottom: 56px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #000000;
`;

export const loginForm = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const loginInput = css`
  width: 328px;
  height: 27px;
  margin-left: 16px;
  color: #111;

  font-family: 'Galmuri9';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  border: none;
  border-bottom: 1px solid #dadada;

  :first-of-type {
    margin-bottom: 40px;
  }

  ::placeholder {
    letter-spacing: -0.01em;
    color: #dadada;
  }

  :focus {
    color: #111;
    border-bottom: 1px solid #111;
    ::placeholder {
      color: #dadada;
    }
  }
  :active {
    color: #dadada;
  }
`;

export const buttonWrapper = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;

  .active {
    cursor: pointer;
    background-color: #111;
    color: #fff;
  }

  .signup {
    margin-top: 4px;
    background-color: #fff;
    color: #111;
  }
`;

export const loginInputError = css`
  width: 328px;
  margin: 8px auto 0;
  color: #ff5d5d;

  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
`;
