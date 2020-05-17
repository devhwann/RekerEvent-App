import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, write } from '../../modules/comment';
// import AuthForm1 from '../../components/Auth1/AuthForm1';
import CommentForm from '../../components/Comment/CommenForm';
import { withRouter } from 'react-router-dom';


const CommenForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, comment } = useSelector(({ comment, user }) => ({
    form: comment.write,
    auth1: comment.comment,
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
    
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함

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
