import api from '@/axios/config';
import { useNavigate } from 'react-router-dom';

export default class TokenService {
  /**
   * 토큰재발급
   */
  static async requestAccessToken(refreshToken: string) {
    try {
      const response = await api.post('/api/token/refresh/', {
        refresh: refreshToken,
      });
      const accessToken = await response.data.access;
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    } catch (err) {
      console.error(err);
      //리프레시 토큰이 만료되어 토큰 재발급에 실패할 경우, 세션 만료처리(로그아웃)
      sessionExpired();
    }
  }
}

export const sessionExpired = () => {
  const navigate = useNavigate();
  alert('세션이 종료되었습니다. 다시 로그인 해주세요.');
  navigate('/login');
  return;
};
