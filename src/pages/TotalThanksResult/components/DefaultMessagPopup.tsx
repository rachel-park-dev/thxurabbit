import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import Close from '@/assets/icon/ico_close_gray.svg';
import LetterRabbit from '@/assets/icon/ico_letter_rabbit.svg';
import justHeart from '@/assets/icon/result_category/heart_just.svg';
import dayjs from 'dayjs';

type IntrinsicAttributes = /*unresolved*/ any;

export const DefaultMessagePopup = (props: {
  defaultMessage: boolean;
  setDefaultMessage: IntrinsicAttributes & React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const date = dayjs(new Date());
  const username = sessionStorage.getItem('name');

  return (
    <>
      <div css={modalContainer}>
        <div css={introWrap}>
          <img src={Close} alt='닫기' css={closeBtn} onClick={() => props.setDefaultMessage(!props.defaultMessage)} />
          <div css={titleWrap}>
            <img src={LetterRabbit} alt='편지 든 토끼' />
            <div css={titleContents}>
              <h1 css={title}>From {username}</h1>
              <p css={dateStyle}>{date.format('YYYY.MM.DD HH:mm:ss')}</p>
            </div>
          </div>
          <div css={line} />
          <div css={messageWrap}>
            올 한 해 많은 감사를 했구나~ 그만큼 {username} 주변에는 좋은 사람들이 많은가봐 23년엔 그들에게 감사를
            돌려주고 힘이 되어주는 사람이 되기를 바랄게! (깡총)
          </div>
          <div css={category}>
            <img src={justHeart} alt='categoryImage' />
            <div className='categoryTitle'>흑토끼가</div>
          </div>
        </div>
      </div>
      <div css={modalBg} />
    </>
  );
};

export const modalContainer = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 91%;
  padding: 26px 0;
  background: white;
  z-index: 2;
`;

export const closeBtn = css`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;

export const modalBg = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

export const introWrap = css`
  padding: 24px;
`;

export const titleWrap = css`
  display: flex;
  padding-bottom: 24px;
`;

const titleContents = css`
  padding-left: 10px;
  line-height: 18px;
`;

const title = css``;

const dateStyle = css`
  color: #949494;
  font-size: 12px;
`;

const line = css`
  border-top: 1px solid #d9d9d9;
  padding-bottom: 16px;
`;

const messageWrap = css`
  width: 280px;
  height: 290px;
  font-size: 14px;
  line-height: 21px;
  overflow-y: auto;
`;

const category = css`
  display: flex;
  justify-content: right;
  font-size: 14px;
  .categoryTitle {
    padding-left: 6px;
  }
`;
function dispatch(arg0: { type: string; userData: import('@/utils/utils').userDataProps | undefined }) {
  throw new Error('Function not implemented.');
}
