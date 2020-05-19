import client from './client';

// 
export const write = ({ body }) =>
  client.post('/api/comment/write', { body });
  


  // export const readPost = id => client.get(`/api/posts/${id}`);

  export const listComment = ({ body }) => {
    // const queryString = qs.stringify({
      client.post('/api/comment/list', { body });
    // });
    // return client.get(`/api/posts?${queryString}`);
  };