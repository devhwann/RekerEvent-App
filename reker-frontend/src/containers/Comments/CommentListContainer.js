import React, { useEffect , useState} from 'react';
import palette from '../../styles/lib/palette';
import Button from '../../components/common/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from '../../components/comments/CommentList';
// import CommentItem from '../../components/comments/CommentList';
import { listComments, } from '../../modules/comments';
import CommentActionButtons from '../../components/comments/CommentActionButtons';
import { setOriginalComment  } from '../../modules/comment';
import {  readComment, unloadComment  } from '../../modules/read';
import { removeComment} from '../../lib/api/comment'; 





/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

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
    const { username } = match.params;
    dispatch(readComment(commentId))     
    const { body,  page} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listComments({ body, username, page }));

   
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
    <CommentList
      loading={loading}
      error={error}
      // comemnt={comment}
      comments={comments}
      user={user}
      actionButtons={
      ownComment &&  <CommentActionButtons  onEdit={onEdit} onRemove={onRemove}/>
      }
    />
    
  );
};

export default withRouter(CommentListContainer);