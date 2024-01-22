import React from 'react';
import * as styles from '@/pages/Intro/style';
import { css } from '@emotion/react';

import { useAppDispatch, useAppState } from '@/contexts/Context';

import Close from '@/assets/icon/ico_close.svg';
import Letter from '@/assets/icon/ico_letter.svg';
import Coin from '@/assets/icon/ico_coin.svg';
import MoneyBag from '@/assets/icon/ico_money_bag.svg';

type guideModalProps = {
  guideClicked: boolean;
  setGuideClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GuideModal = ({ guideClicked, setGuideClicked }: guideModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div css={modalContainer}>
        <div css={styles.introWrap}>
          <img src={Close} alt='닫기' css={closeBtn} onClick={() => setGuideClicked(false)} />
          <div css={styles.contentsWarp}>
            <img src={Letter} alt='편지' />
            <h3>누구일까</h3>
            <p>
              1월 1일에 연말정산 결과와 함께
              <br />
              누가 나에게 어떤 감사메세지를 남겼는지
              <br />
              볼 수 있어! (깡총)
              <br />
              (그때 까지는 <span css={styles.highlight}>비밀이야!</span>)
            </p>
          </div>
          <div css={styles.contentsWarp}>
            <img src={Coin} alt='동전' />
            <h3>얼마일까</h3>
            <p>
              내가 받은 감사는 <span css={styles.highlight}>소득</span>이고
              <br />
              다른 사람에게 한 감사는 <span css={styles.highlight}>지출</span>로<br />
              정산될거야 (깡총)
            </p>
          </div>
          <div css={styles.contentsWarp}>
            <img src={MoneyBag} alt='돈주머니' />
            <h3>연말정산</h3>
            <p>
              내가 받은 감사는 <span css={styles.highlight}>소득</span>으로
              <br />
              다른 사람에게 한 감사는 <span css={styles.highlight}>지출</span>로<br />
              진짜 연말정산처럼 정산될거야
            </p>
          </div>
        </div>
      </div>
      <div css={modalBg} />
    </>
  );
};

const modalContainer = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 91%;
  padding: 26px 0;
  background: white;
  z-index: 2;
`;

const closeBtn = css`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;

const modalBg = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
