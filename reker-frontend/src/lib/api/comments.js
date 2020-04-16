import client from './client';

// 로그인
export const writeComment = ({ body }) =>
  client.post('/api/comments/comments', { body });

// export const

