import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { readComment, unloadComment } from '../../modules/comment';
import CommentItem from '../../components/comments/CommentList';
import CommentActionButtons from '../../components/comments/CommentActionButtons';
// import { setOriginalComment } from '../../modules/comemnt';
import { removeComment } from '../../lib/api/comment';

const CommentItemContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { commentId } = match.params;
  const dispatch = useDispatch();
  const { comment, error, loading, user } = useSelector(
    ({ comment, loading, user }) => ({
      comment: comment.comment,
      error: comment.error,
      loading: loading['comment/READ_COMMENT'],
      user: user.user,
    }),
  );

  useEffect(() => {
    // dispatch(readComment(commentId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      // dispatch(unloadComment());
    };
  }, [dispatch, commentId]);

  const onEdit = () => {
    // dispatch(setOriginalComment(comment));
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removeComment(commentId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  const ownComment = (user && user._id) === (comment && comment.user._id);

  return (
    <CommentItem
      comment={comment}
      loading={loading}
      error={error}
      actionButtons={
        ownComment && <CommentActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(CommentItemContainer);
