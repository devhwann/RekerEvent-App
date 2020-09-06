import client from './client';
import qs from 'qs'

export const write = ({ body }) =>
  client.post('/api/comment/write', { body });
  
  export const listComments =({ page, username, body  }) => {
    const queryString = qs.stringify({
      page,
      username,
      body,
    });
    return client.get(`/api/comment?${queryString}`);
  };

  
export const updateComment = ({ id, body  }) =>
client.patch(`/api/comment/${id}`, {
  body,
});

export const removeComment = id => client.delete(`/api/comment/${id}`);

export const readComment = id => client.get(`/api/comment/${id}`);


