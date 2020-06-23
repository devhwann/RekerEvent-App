import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
import Certification from '../../components/AuthFomr1/index';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Form, Input, Button } from 'antd';


const RegisterForm = ({ history,ua }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    // authError: auth.authError,
    user: user.user,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm, phone, address, termsCheck, policyCheck} = form;    
    if ([username, password, passwordConfirm, phone, address ].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if(!termsCheck ) {
      setError('약관에 동의해주세요.');
      return;
    }
    if(!policyCheck) {
      setError('약관에 동의해주세요.');
      return;
    }
  
    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      // agree();
      return;
    }
   
   
    const { getFieldDecorator, validateFieldsAndScroll } = form;
      validateFieldsAndScroll((error, values) => {
        if (!error) {
          /* 가맹점 식별코드 */
          const userCode = 'imp10391932';
          /* 결제 데이터 */
          const {
            merchant_uid,
            name,
            phone,
            min_age,
          } = values;
  
          const data = {
            merchant_uid,
          };
  
          if (name) {
            data.name = name;
          }
          if (phone) {
            data.phone = phone;
          }
          if (min_age) {
            data.min_age = min_age;
          }
  
          if (isReactNative()) {
            /* 리액트 네이티브 환경일때 */
            const params = {
              userCode,
              data,
              type: 'certification', // 결제와 본인인증을 구분하기 위한 필드
            };
            const paramsToString = JSON.stringify(params);
            window.ReactNativeWebView.postMessage(paramsToString);
          } else {
            /* 웹 환경일때 */
            const { IMP } = window;
            IMP.init(userCode);
            IMP.certification(data, callback);
          }
        }
      });
      function callback(response) {
        const query = queryString.stringify(response);
        history.push(`/certification/result?${query}`);
      }

      function isReactNative() {
        /*
          리액트 네이티브 환경인지 여부를 판단해
          리액트 네이티브의 경우 IMP.certification()을 호출하는 대신
          iamport-react-native 모듈로 post message를 보낸다
    
          아래 예시는 모든 모바일 환경을 리액트 네이티브로 인식한 것으로
          실제로는 user agent에 값을 추가해 정확히 판단해야 한다
        */
        if (ua.mobile) return true;
        return false;
      }
    


    dispatch(register({  username, password, passwordConfirm, phone, address, termsCheck, policyCheck }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
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
      setError('회원가입 실패');
      console.log('회원가입 실패');
      return;
    }

    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }

    if (user) {
      alert('이미 회원가입이 되어 있습니다.')	      
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
    <Certification
      type="register"
      form={form}      
      onChange={onChange}
      onSubmit={onSubmit}      
      error={error}
    />
  );
};

const certificationForm = Form.create({ name: 'RegisterForm' })(RegisterForm);

export default withRouter(certificationForm);
