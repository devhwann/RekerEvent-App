import client from './client';

// 
export const writeComment = ({ body }) =>
  client.post('/api/comment/write', { body });

// export const

