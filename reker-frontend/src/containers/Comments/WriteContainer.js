import React, { useEffect, useCallback } from 'react';
import CommentFormBlock from '../../components/Comment';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, writeComment } from '../../modules/comment';
import { withRouter } from 'react-router-dom';


const CommentForm = ({ history }) => {
  const dispatch = useDispatch();
  const { body } = useSelector(({ comment, write }) => ({    
    form: comment.write,
    
    body: write.body,
  }));
  // const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
  //   dispatch,
  // ]);

  const onChange = e => {
    const { value,body} = e.target;
    dispatch(
      changeField({
        form: 'comment',
        key: body,
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
    dispatch(comment({ comment}))
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

