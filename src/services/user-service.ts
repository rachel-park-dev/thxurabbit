import api from '@/axios/config';

export type User = {
  username?: string | undefined;
  password?: string | undefined;
};

export default class UserService {
  /**
   * 회원가입 api
   */
  static async register(user: User) {
    const response = await api.post('api/user/register/', {
      username: user.username,
      password: user.password,
    });
    return response.data;
  }

  /**
   * 로그인 api
   */
  static async login(user: User) {
    const response = await api.post('api/user/login/', {
      username: user.username,
      password: user.password,
    });
    return response.data;
  }
  /**
   * 로그아웃 api
   */
  static async logout(user: User) {
    const response = await api.post('api/user/logout/', {
      username: user.username,
      password: user.password,
    });
    return response.data;
  }

  /**
   * 유저 정보 조회 api
   * {
   * "username": "string",
   * "password": "string",
   * "income": 0,
   * "outgo": 0
   * }
   */
  static async read(id: Number) {
    const response = await api.get(`/api/user/${id}/`);
    sessionStorage.setItem('name', response.data.username);
    return response.data;
  }

  /*
   * username으로 id 조회 api
   */
  static async findUserId(userName: string) {
    const response = await api.get(`/api/user/info?username=${userName}`);
    return response.data;
  }
}
