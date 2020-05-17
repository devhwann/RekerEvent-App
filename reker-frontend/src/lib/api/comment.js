import client from './client';

// 
export const write = ({ body }) =>
  client.post('/api/comment/write', { body });
  


