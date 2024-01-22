import React from 'react';
import { css } from '@emotion/react';
import frame from '@/assets/icon/ico_frame.svg';

const BubbleMessage = ({ children, style }: BubbleMessageProps) => {
  return (
    <div css={cardBox} style={style}>
      <p css={cardText}>{children}</p>
      <img src={frame} alt='frame' css={cardImg} />
    </div>
  );
};

export default BubbleMessage;

const cardBox = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 24px 18px;
  margin: 0 auto;

  width: 328px;
  background: #ffffff;
  font-size: 14px;
  border: 2px solid #000000;
  box-sizing: border-box;
`;

const cardText = css`
  line-height: 1.5;
  text-align: center;
`;

const cardImg = css`
  display: inline-block;
  margin-bottom: 6px;
  margin-left: 3px;
`;

type BubbleMessageProps = {
  children: React.ReactNode;
  style?: object;
};
