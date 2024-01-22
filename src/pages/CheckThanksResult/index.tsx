/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from './style';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import checkResultTitleBg from '@/assets/images/yellowBg_md.png';
import checkResultRabbit from '@/assets/images/checkResultRabbit.png';
import BubbleMessage from '@/components/BubbleMessage';
import rainbowLuckyBag from '@/assets/icon/ico_rainbow_lucky_bag.svg';
import letterRabbit from '@/assets/images/letterRabbit.png';
import Button from '@/components/Button';
import SharePopup from '@/components/SharePopup';
import UserService from '@/services/user-service';
import { useAppDispatch, useAppState } from '@/contexts/Context';
import { parsedToken } from '@/utils/utils';
import MarqueeContents from '@/components/MarqueeContents';
import { useNavigate } from 'react-router-dom';

const CheckThanksResult = () => {
  const [isPlus, setIsPlus] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState('');
  const [dDay, setDday] = useState(0);
  const [sum, setSum] = useState(0);
  const [income, setIncome] = useState(0);
  const [outgo, setOutgo] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = parsedToken();
  const state = useAppState();

  useEffect(() => {
    dispatch({ type: 'SET_USER_DATA', userData: userData });
  }, []);

  const token = sessionStorage.getItem('tt');
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    const dDay = computedDday();
    setDday(dDay);
    try {
      if (userData) {
        const setData = async () => {
          const data: any = await UserService.read(userData.user_id);
          setIncome(data.income * 100000);
          setOutgo(data.outgo * 100000);
          if (data.income - data.outgo > 0) {
            setIsPlus(true);
          } else {
            setIsPlus(false);
          }
          setUserName(data.username);
          const settlementAmount = data.income - data.outgo;
          setSum(settlementAmount * 100000);
        };
        setData();
      }
    } catch (err) {
      console.error(err);
    }
  }, [income, outgo, sum]);

  const computedDday = () => {
    const today = new Date();
    const dDay = new Date(2023, 0, 1);
    const gap = dDay.getTime() - today.getTime();
    const computedDay = Math.ceil(gap / (1000 * 60 * 60 * 24));

    return computedDay;
  };

  return (
    <Layout>
      <Header />
      <div css={styles.dDayWrap}>
        <img src={rainbowLuckyBag} css={styles.dDayBombLeft} alt='복주머니' />
        <img src={checkResultTitleBg} alt='D-day 배경' />
        <img src={rainbowLuckyBag} css={styles.dDayBombRight} alt='복주머니' />
        <h1 css={styles.dDayContents}>D-{dDay}</h1>
      </div>
      <div>
        <img src={checkResultRabbit} css={styles.rabbitImg} alt='D-day 배경' />
        <BubbleMessage style={{ marginTop: '16px' }}>
          사랑하는 사람들에게 받은
          <br /> 감사 연말정산을 함께 확인보자! (깡총)
        </BubbleMessage>
      </div>
      <div css={styles.checkResultWrap}>
        <h1 css={styles.checkResultTitle}>중간현황</h1>
        <div css={styles.checkResultRow}>
          <div css={styles.titleSm}>소득</div>
          <p css={styles.checkResultPayment}>{income ? income.toLocaleString('ko-KR') : 0}원</p>
        </div>
        <div css={styles.checkResultRow}>
          <div css={styles.titleSm}>지출</div>
          <p css={styles.checkResultPayment}>{outgo ? outgo.toLocaleString('ko-KR') : 0}원</p>
        </div>
      </div>
      <div css={styles.checkResultTotal}>
        <p>정산금액</p>
        <p css={styles.checkResultTotalContents}>{sum ? (sum > 0 ? '+' : '') + sum.toLocaleString('ko-KR') : 0}원</p>
      </div>
      <div css={styles.checkResultWrap}>
        <div css={styles.rabbitCommentWrap}>
          <img src={letterRabbit} alt='편지봉투 속 토끼' />
          {isPlus ? (
            <p css={styles.rabbitComment}>
              많은 사람들에게 감사를 받았구나!
              <br />
              나도 다른 사람들에게 감사를
              <br />
              돌려주자! (깡총)
            </p>
          ) : (
            <p css={styles.rabbitComment}>
              많은 사람에게 감사를 했구나!
              <br />
              다른 사람들도 나에게 따뜻한
              <br />
              감사메시지를 남기고 싶을거야! (깡총)
            </p>
          )}
        </div>
        <div css={styles.btnWrap}>
          <Button
            width='328px'
            color='#111'
            css={styles.blackBtn}
            onClick={() => {
              setClicked(true);
            }}
          >
            더 많은 사람에게 감사인사 받기
          </Button>
          <Button
            width='328px'
            color='white'
            css={styles.whiteBtn}
            onClick={() => {
              navigate('/');
            }}
          >
            홈으로 돌아가기 &gt;
          </Button>
        </div>
      </div>
      <MarqueeContents />
      {clicked && (
        <SharePopup width='296px' onCancel={() => setClicked(false)}>
          {`${import.meta.env.VITE_API_URL}/write/${userName}`}
        </SharePopup>
      )}
    </Layout>
  );
};

export default CheckThanksResult;
