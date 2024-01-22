/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './style';
import Header from '@/components/Header';
import BubbleMessage from '@/components/BubbleMessage';
import Section from '@/components/Section';
import shareRabbit from '@/assets/images/shareRabbit.png';
import Letter from '@/assets/icon/ico_letter.svg';
import Coin from '@/assets/icon/ico_coin.svg';
import Layout from '@/components/Layout';
import SharePopup from '@/components/SharePopup';
import MarqueeContents from '@/components/MarqueeContents';
import { useAppDispatch } from '@/contexts/Context';
import { parsedToken } from '@/utils/utils';
import UserService from '@/services/user-service';

const ThanksShare = () => {
  const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = parsedToken();

  useEffect(() => {
    dispatch({ type: 'SET_USER_DATA', userData: userData });
    if (userData) {
      const setData = async () => {
        const data: any = await UserService.read(userData.user_id);
        setUserName(data.username);
      };
      setData();
    }
  }, []);

  return (
    <Layout>
      <Header />
      <h1 css={styles.shareText}>저장완료!(깡총)</h1>
      <img src={shareRabbit} alt='공유하기' css={styles.shareImg} />
      <BubbleMessage>
        감사메시지가 저장되었어
        <br />
        1월 1일에 잘 전달할게 (깡총)
      </BubbleMessage>
      <div css={styles.sectionWrapper}>
        <Section
          sectionImage={Letter}
          sectionDesc='공유하기'
          sectionTitle='나도 다른 사람들에게'
          sectionSubtitle='감사메시지를 받고 싶다면?'
          sectionBtnText='내 감사 메시지 링크 공유하기'
          sectionClick={() => setClicked(true)}
        />
        <Section
          sectionImage={Coin}
          sectionDesc='중간현황 보러가기'
          sectionTitle='나의 감사 연말정산'
          sectionSubtitle='중간현황이 궁금하다면?'
          sectionBtnText='내 중간현황 바로가기'
          sectionClick={() => navigate('/check')}
        />
      </div>
      <MarqueeContents />
      {clicked && (
        <SharePopup width='296px' onCancel={() => setClicked(false)}>
          {`https://thankurabbit.me/write/${userName}`}
        </SharePopup>
      )}
    </Layout>
  );
};

export default ThanksShare;
