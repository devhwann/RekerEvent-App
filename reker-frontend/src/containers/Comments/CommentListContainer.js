import React, { useEffect , useState} from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from '../../components/comments/CommentList';
import CommentItem from '../../components/comments/CommentList';
import { listComments } from '../../modules/comments';
import CommentActionButtons from '../../components/comments/CommentActionButtons';

const CommentListContainer = ({ location }) => {
  const dispatch = useDispatch();

  const { comments, comment, error, loading, user } = useSelector(
    ({ comments, comment, loading, user }) => ({
      comments: comments.comments,
      // comment: comment,comment,
      error: comments.error,
      loading: loading['comments/LIST_COMMNTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { body, username, page} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listComments({ body, username, page }));
    }, [dispatch,  location.search ]);
     

  return (
    <CommentList
      loading={loading}
      error={error}
      comments={comments}
      // comemnt={comment}
      user={user}
      // actionButtons={<CommentActionButtons />}
    />
  );
};

export default withRouter(CommentListContainer);