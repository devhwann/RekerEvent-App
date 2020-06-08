import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, write } from '../../modules/comment';
import CommentForm from '../../components/Comment/CommenForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';


const CommenForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, comment, commentError, user } = useSelector(({ comment, user }) => ({
    form: comment.write,
    comment: comment.comment,
    user: user.user
    // auth1Error: auth1.auth1Error,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'write',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const {body} = form;    
    if ([body].includes('')) {
      setError('빈 칸을 입력하세요.');
      return;
    }

    dispatch(write({ body }));
    
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('comment'));
  }, [dispatch]);


    useEffect(() => {
    if (commentError) {
      // 계정명이 이미 존재할 때
      
      // 기타 이유
      // setError('회원가입 실패');
      console.log('댓글 실패');
      return;
    }

    if (comment) {
      console.log('댓글 성공');
      console.log(comment);
      dispatch(check());
      history.push('/'); // 홈 화면으로 이동	
    }
  }, [comment, commentError, dispatch, history]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.push('/'); // 홈 화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);
  

  // 회원가입 성공 / 실패 처리

  return (
    <CommentForm
      type="write"
      form={form}      
      onChange={onChange}
      onSubmit={onSubmit}      
      error={error}
    />
  );
};

export default withRouter(CommenForm);
