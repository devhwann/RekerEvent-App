import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, eventregister } from '../../modules/auth';
import EventAuthForm from '../../components/event/EventAuthForm';
// import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';



const agree = () => {
  let chkbox = document.getElementsByName('agree');
  let chk = false;
  for(var i=0 ; i<chkbox.length ; i++) {
     if(chkbox[i].checked) {
        chk = true; 
      } else {
       chk = false; 
      } 
    }

    if (chk === false) 
      alert('약관에 동의해주세요.')
      return false;
    
  }


const toggleChange = () => {
  this.setState(prevState => ({
    isJB: !prevState.isJB,
  }));
}

const EventForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth,  authError, user } = useSelector(({ auth, user }) => ({
    form: auth.eventregister,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'eventregister',
        key: name,
        value,
      }),
      // this.setState({ checked: !this.state.checked })
    );
  };
  

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { name, birthday, phone, userId  } = form;
    // 하나라도 비어있다면
    if ([name, birthday, phone, userId ].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      agree();
      return;
    }

    dispatch(eventregister({ name, birthday, phone, userId }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('eventregister'));
  }, [dispatch]);

  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      // 기타 이유
      setError('회원가2입 실패');
      console.log('회원2가입 실패');
      return;
    }

    if (auth) {
      alert('사전등록 되었습니다.')
      history.push('/'); // 홈 화면으로 이동
      console.log(auth);
      // dispatch(check());
    }
  }, [auth, authError, dispatch]);

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

  return (
    <EventAuthForm
      type="event"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(EventForm);
