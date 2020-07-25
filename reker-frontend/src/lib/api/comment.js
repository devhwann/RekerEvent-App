import client from './client';
import qs from 'qs'

export const write = ({ body }) =>
  client.post('/api/comment/write', { body });
  



//   export const listComments = ({ body, id }) => {
//       client.get('/api/comment/listComments', { body, id , });
//   };

  
//   export const list = ({ body, id }) => {
//     client.get('/api/comment/list', { body, id , });
// };
// // export const ListComments = ({ body, id }) => {
// //   client.get('/api/comment/list', { body, id , });
// // };

  export const listComments = ({ page, username, body , }) => {
    const queryString = qs.stringify({
      page,
      username,
      body,
    });
    return client.get(`/api/comment?${queryString}`);
  };

