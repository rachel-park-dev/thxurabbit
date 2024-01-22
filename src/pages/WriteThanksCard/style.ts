import { css } from '@emotion/react';

export const writeCardImg = css`
  display: block;
  width: 208px;
  margin: 24px auto;
`;

export const guideText = css`
  padding-top: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #48484a;
  text-decoration: underline #48484a;
  cursor: pointer;
`;

export const categoriesWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 76px);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  justify-content: center;
  margin-top: 24px;
`;

export const category = (data: number) => css`
  padding: 4px 0;
  background: #ffffff;
  color: #a2a2a2;
  border: 2px solid #e0e0e0;
  line-height: 1.5;
  text-align: center;

  cursor: pointer;

  :hover {
    border-color: #ff8616;
    color: #ff8616;
  }

  &[data-index='${data}'] {
    border-color: #ff8616;
    color: #ff8616;
  }
`;

export const comment = css`
  margin: 8px auto 40px;
  color: #ff8616;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
`;

export const writeCardWrapper = css`
  width: 328px;
  height: 288px;
  margin: 0 auto;
  box-sizing: content-box;
  border: 1px solid #e0e0e0;
`;

export const writeCardBox = css`
  padding: 16px;
  margin-bottom: 8px;
`;
export const writeCardArea = css`
  display: block;
  width: 296px;
  height: 194px;
  margin: 16px 0;

  font-family: 'Galmuri9';
  font-size: 14px;
  line-height: 1.5;
  border: none;
  resize: none;

  ::placeholder {
    color: #a2a2a2;
    font-size: 14px;
    line-height: 1.9;
  }
`;

export const countText = css`
  margin: 8px 0 16px;
  padding-right: 16px;
  text-align: right;
`;

export const writeCareBtn = css`
  &.homeBtn {
    margin-top: 10px;
  }
`;
