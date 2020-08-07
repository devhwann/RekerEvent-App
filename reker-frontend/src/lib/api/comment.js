import client from './client';
import qs from 'qs'

export const write = ({ body }) =>
  client.post('/api/comment/write', { body });
  
  export const listComments = ({ page, username, body , }) => {
    const queryString = qs.stringify({
      page,
      username,
      body,
    });
    return client.get(`/api/comment?${queryString}`);
  };

  
export const updatePost = ({ id, title, body  }) =>
client.patch(`/api/posts/${id}`, {
  title,
  body,
});

export const removeComment = id => client.delete(`/api/posts/${id}`);
