import React, { useEffect , useState} from 'react';
import palette from '../../styles/lib/palette';
import Button from '../../components/common/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import CommentList from '../../components/comments/CommentList';
import CommentItem from '../../components/comments/CommentView';
import { listComments, } from '../../modules/comments';
import CommentActionButtons from '../../components/comments/CommentActionButtons';
import { setOriginalComment  } from '../../modules/comment';
import {  readComment, unloadComment  } from '../../modules/read';
import { removeComment} from '../../lib/api/comment'; 
import CommentViewer from '../../components/comments/CommentView';


const CommentListContainer = ({ location, history, match }) => {


  const { commentId} = match.params;
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
    dispatch(readComment(commentId))     
    const { body, username, page} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listComments({ body, username, page }));

    return () => {
      dispatch(unloadComment());
    };
    }, [dispatch,  location.search ,commentId]);
    

    const onEdit = () => {
      dispatch(setOriginalComment(comment));
      history.push('/write');
    }

    const onRemove = async () => {
      try {
        await removeComment(commentId);
        history.push('/'); // 홈으로 이동
      } catch (e) {
        console.log(e);
      }
    };
     

const ownComment = (user && user._id) === (comment && comment.user._id)

  return (
    <CommentViewer
    comment={comment}
      loading={loading}
      error={error}
      comments={comments}
      user={user}
      actionButtons={
        ownComment  &&    <CommentActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
    
  );
};

export default withRouter(CommentListContainer);