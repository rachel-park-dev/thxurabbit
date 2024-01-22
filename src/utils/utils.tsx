import React from 'react';
import jwtDecode from 'jwt-decode';
import { useAppState } from '@/contexts/Context';

export interface userDataProps {
  token_type: string;
  exp: number;
  iat: number;
  jti: number;
  user_id: number;
}
//토큰 정보 불러오기
export const parsedToken = (): userDataProps | undefined => {
  // const state = useAppState();
  const accessToken = sessionStorage.getItem('tt');
  const token = accessToken;
  if (!token) return;

  const decoded: userDataProps = jwtDecode(token);
  return decoded;
};
