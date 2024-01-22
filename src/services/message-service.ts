import api from '@/axios/config';
import { messageCardProps } from '@/pages/WriteThanksCard';

export default class MessageService {
  /**
   * POST : 감사 메세지 남기기
   */
  static async postMessage(token: any, messageCard: messageCardProps) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.post(`/api/messages/`, messageCard);
    return response.data;
  }

  /**
   * GET : 전체 조회용
   */
  static async getMessageAll(token: any) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(`api/messages`);
    return response.data;
  }

  /**
   * GET : sender가 보낸 메세지 조회
   */
  static async getSendMessage(token: any, sender: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(`api/messages?sender__username=${sender}`);
    return response.data;
  }

  /**
   * GET : receiver가 받은 전체 메세지 조회
   */
  static async getReceiveMessages(token: any, receiver: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(`api/messages?receiver__username=${receiver}`);
    return response.data;
  }

  /**
   * GET : receiver가 받은 개별 메세지 조회
   */
  static async getMessage(token: any, id: number) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(`api/messages/${id}/`);
    return response.data;
  }

  /**
   * PATCH : receiver가 받은 개별 메세지를 수정할 경우
   */
  static async patchMessage(token: any, id: number, is_opened: boolean) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.patch(`api/messages/${id}/`, { is_opened: is_opened });
    return response.data;
  }

  /**
   * GET : sender가 receiver에게 보낸 메세지 조회
   *       = sender로부터 receiver가 받은 메세지 조회
   */
  static async getMessageToReceiver(token: any, sender: string, receiver: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(`api/messages?sender__username=${sender}&receiver__username=${receiver}`);
    return response.data;
  }

  /**
   * GET : sender가 receiver에게 보낸 메세지 조회 Pagination
   */
  static async getAllMessagesToReceiver(token: any, sender: string, receiver: string, page: number) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get(
      `api/messages?sender__username=${sender}&receiver__username=${receiver}&page={page}`,
    );
    return response.data;
  }

  /**
   * GET : 카테고리별로 유저가 받은 메세지 조회
   */

  //메세지 수정하기
  static async updateMessage(token: any, sender: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.patch(`api/messages/?sender_username=${sender}`);
    return response.data;
  }

  //메세지 삭제하기
  static async deleteMessage(token: any, sender: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.delete(`api/messages/?sender_username=${sender}`);
    return response.data;
  }
}
