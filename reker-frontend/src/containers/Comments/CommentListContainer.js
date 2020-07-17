import React, { useEffect , useState} from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from '../../components/comments/CommentList';
import { listComments } from '../../modules/comments';
import Axios from 'axios';

const CommentListContainer = ({ location, match ,body, username }) => {
  const dispatch = useDispatch();
  const { comments, error, loading, user } = useSelector(
    ({ comments, loading, user }) => ({
      comments: comments.comments,
      error: comments.error,
      loading: loading['comments/LIST_COMMNTS'],
      user: user.user,
    }),
  );
  // useEffect(() => {
    // const { tag, page, body, username } = qs.parse(location.search, {
    //   ignoreQueryPrefix: true,
    // });

// const fetchData = async () => {
//   try {
//     const response = await Axios.get(
//       `http://localhost:4000/api/comment/`,
//     );
//     setComments(response.data.comments);
//   } catch (e) {
//     console.log(e);
//   };
// }
// fetchData()

// }, []);

//     dispatch(listComments({ body, username }));
//   }, [dispatch ]);
// const [data, setData, setComments ] = useState({ hits : []})

     

  return (
    <CommentList
      loading={loading}
      error={error}
      comments={comments}
      showWriteButton={user}
    />
  );
};

export default withRouter(CommentListContainer);
// const fetchData = async () => {
//   try {
//     const response = await Axios.get(
//       `http://localhost:4000/api/comment/`,
//     );
//     setComments(response.data.comments);
//   } catch (e) {
//     console.log(e);
//   };
// };
// fetchData()
// }, []);