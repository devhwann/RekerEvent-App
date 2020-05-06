import React, { useEffect, useCallback } from 'react';
import CommentFormBlock from '../../components/Comment';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, writeComment } from '../../modules/comment';
// 여기서 읽혀야함 ..
import { withRouter } from 'react-router-dom';


const CommentForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, comment, commentError, user} = useSelector(({ comment, write, user }) => ({    
    // body: write.body,
    form: comment.write,
    comment:comment.comment, 
    commentError: comment.commentError,
    user: user.user
  }));
  // const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
  //   dispatch,
  // ]);

  const onChange = e => {
    const { value,name} = e.target;
    dispatch(
      changeField({
        form: 'writeComment',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { comment } 
    if([comemnt].includes('')) {
      // setError('z')
      console.log('not comment')
      return;
    } 
    dispatch(writeComment ({ body }))
  };

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize('comment'));
    };
  }, [dispatch]);


  return <CommentFormBlock 
    onChange={onChange}
    form={form}
    // body={body}
    onSubmit={onsubmit}
    error={error}
     />;
};

export default withRouter(CommentForm);

