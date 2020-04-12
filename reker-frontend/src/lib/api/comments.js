import client from './client';

// 로그인
export const writeComment = ({ }) =>
  client.post('/api/auth/login', { });

