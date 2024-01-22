/** @jsxImportSource @emotion/react */
import React from 'react';
import whiteRabbit from '@/assets/icon/ico_white_rabbit.svg';
import introRabbit from '@/assets/images/introRabbit.png';
import Letter from '@/assets/icon/ico_letter.svg';
import Coin from '@/assets/icon/ico_coin.svg';
import MoneyBag from '@/assets/icon/ico_money_bag.svg';
import { Link } from 'react-router-dom';
import * as styles from './style';
import Button from '@/components/Button';
import BubbleMessage from '@/components/BubbleMessage';

const Intro = () => {
  return (
    <div css={styles.container}>
      <div css={styles.headerWrap}>
        <div>
          <img src={whiteRabbit} alt='흰토끼' />
        </div>
        <div css={styles.headerContents}>THANK U RABBIT 2022</div>
        <div>
          <img src={whiteRabbit} alt='흰토끼' />
        </div>
      </div>
      <div css={styles.bgWrap}>
        <div css={styles.titleWrap}>
          <h3>흑토끼와 함께하는</h3>
          <h1>2022 감사연말 정산</h1>
        </div>
        <div css={styles.rabbitWrap}>
          <img src={introRabbit} css={styles.rabbitImg} alt='D-day 배경' />
          <BubbleMessage>
            23년의 상징, 나 흑토끼와 함께
            <br /> 감사한 사람에게 마음을 전해보자구!(깡총)
          </BubbleMessage>
        </div>
      </div>
      <div css={styles.introWrap}>
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
            (그때까지는 <span css={styles.highlight}>비밀이야!</span>)
          </p>
        </div>
        <div css={styles.contentsWarp}>
          <img src={Coin} alt='동전' />
          <h3>얼마일까</h3>
          <p>
            모든 감사는 한 번에 <span css={styles.highlight}>10만원</span>으로 계산해
            <br />
            한 사람에게 한 번만 감사할 수 있어 <br />
            중복으로 감사는 불가능하다구!
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
        <h3 css={styles.contentsSubTitle}>
          자, 그럼 지금 바로 나와 함께
          <br />
          감사의 마음을 전하러 가자
        </h3>
        <div css={styles.btnWrap}>
          <Link to='/login'>
            <Button width='328px' color='#fff' css={styles.btnLg} className='blackBtn'>
              로그인 하러가기
            </Button>
          </Link>
          <Link to='/register'>
            <Button width='328px' color='white' css={styles.btnLg} className='whiteBtn'>
              초간단 회원가입 하러가기
            </Button>
          </Link>
          <div css={styles.inquiryEmail}>문의:besidemonster@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
