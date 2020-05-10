import client from './client';

// 
export const writeComment = ({ body }) =>
  client.post('/api/comment/writeComment', { body });

// export const

