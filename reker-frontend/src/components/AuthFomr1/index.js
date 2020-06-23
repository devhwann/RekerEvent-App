import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { withUserAgent } from 'react-useragent';
import queryString from 'query-string';

const { Item } = Form;

// const certification = ({ history,  ua ,type, form, onChange, onSubmit, error }) => {

  // function handleSubmit(e) {
  //   e.preventDefault();
    
  //   validateFieldsAndScroll((error, values) => {
  //     if (!error) {
  //       /* 가맹점 식별코드 */
  //       const userCode = 'imp10391932';
  //       /* 결제 데이터 */
  //       const {
  //         merchant_uid,
  //         name,
  //         phone,
  //         min_age,
  //       } = values;

  //       const data = {
  //         merchant_uid,
  //       };

  //       if (name) {
  //         data.name = name;
  //       }
  //       if (phone) {
  //         data.phone = phone;
  //       }
  //       if (min_age) {
  //         data.min_age = min_age;
  //       }

  //       if (isReactNative()) {
  //         /* 리액트 네이티브 환경일때 */
  //         const params = {
  //           userCode,
  //           data,
  //           type: 'certification', // 결제와 본인인증을 구분하기 위한 필드
  //         };
  //         const paramsToString = JSON.stringify(params);
  //         window.ReactNativeWebView.postMessage(paramsToString);
  //       } else {
  //         /* 웹 환경일때 */
  //         const { IMP } = window;
  //         IMP.init(userCode);
  //         IMP.certification(data, callback);
  //       }
  //     }
  //   });
  // }

  // /* 본인인증 후 콜백함수 */
  // function callback(response) {
  //   const query = queryString.stringify(response);
  //   history.push(`/certification/result?${query}`);
  // }

  const RegisterForm = ({history,  ua ,type, form }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {  auth, authError, user } = useSelector(({ auth, user }) => ({
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
  
  
      dispatch(register({  username, password, passwordConfirm, phone, address, termsCheck, policyCheck }));
    };
      
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
    <Wrapper>
      <Header>아임포트 본인인1증 테스트</Header>
      <FormContainer onSubmit={onSubmit}>
        <Item>
          {getFieldDecorator('merchant_uid', {
            initialValue: `min_${new Date().getTime()}`,
            rules: [{ required: true, message: '주문번호는 필수입력입니다' }],
          })(
            <Input size="large" addonBefore="주문번호" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('name')(
            <Input size="large" addonBefore="이름" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('phone')(
            <Input size="large" type="number" addonBefore="전화번호" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('min_age')(
            <Input
              size="large"
              type="number"
              addonBefore="최소연령"
              placeholder="허용 최소 만 나이"
            />,
          )}
        </Item>
        <Button type="primary" htmlType="submit" size="large">
          본인인증하기
        </Button>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  padding-top: 0;
  font-size: 3rem;
`;

const FormContainer = styled(Form)`
  width: 350px;
  border-radius: 3px;

  .ant-row {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    display: flex;
    align-items: center;
  }
  .ant-col.ant-form-item-label > label::after {
    display: none;
  }

  .ant-form-explain {
    margin-top: 0.5rem;
    margin-left: 9rem;
  }

  .ant-input-group-addon:first-child {
    width: 9rem;
    text-align: left;
    color: #888;
    font-size: 1.2rem;
    border: none;
    background-color: inherit;
  }
  .ant-input-group > .ant-input:last-child {
    border-radius: 4px;
  }

  .ant-col {
    width: 100%;
  }

  button[type='submit'] {
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`;

// const CertificationForm = () => {  
// }(Certification);

const certificationForm = Form.create({ name: 'RegisterForm' })(RegisterForm);

export default withUserAgent(withRouter(certificationForm));
