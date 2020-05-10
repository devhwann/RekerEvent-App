import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, writeComment } from '../../modules/comment';
import CommentFormBlock from '../../components/Comment/';
import { withRouter } from 'react-router-dom';


const CommentForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form,  commentError, user, comment} = useSelector(({ comment, write, user }) => ({        
    form: comment.writeComment,
    comment:comment.comment, 
    commentError: comment.commentError,
    user: user.user
  }));  

  const onChange = e => {
    const { value,name ,body} = e.target;
    dispatch(
      changeField({
        form: 'writeComment',
        key: name,
        value,
      }),
    );    

  };

  useEffect(() => {
    dispatch(initializeForm('writeComment'));
  }, [dispatch]);
  
  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { body } = form;
    // 하나라도 비어있다면
    if ([body ].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    } 
    dispatch(writeComment ({ body }))
  };

  // 언마운트될 때 초기화
  // useEffect(() => {
  //   return () => {
  //     dispatch(initialize('comment'));
  //   };
  // }, [dispatch]);
  useEffect(() => {
    
    if (authError) {
      //  추천인 ID가 공백일댸 
      if (authError.response.status === 406) {
          // console.log('sc공2백');
          // console.log(auth);
          alert('사전등록 되었습니다.')
          history.push('/'); // 홈 화면으로 이동
      }else if (authError.response.status === 408) {
        setError('추천인 아이디가 존재하지 않습니다.');
        return;
      } 
      // 기타 이유
      setError('양식을 정확히 입력해주세요.');
      return;
    }
    // event 인수를 받았을떄 실행되지 않음 .. 
    if (auth) {
      alert('사전등록 되었습니다.')	      
      history.push('/'); // 홈 화면으로 이동	
      console.log(event);
    }
    if (user) {
      alert('로그아웃 후 사전등록이 가능 합니다.')	      
    }
    

  }, [auth, authError,  history, event, user]);

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

  return <CommentFormBlock 
    type="writeComment"
    onChange={onChange}
    form={form}
    onSubmit={onsubmit}
    error={error}
     />;
};

export default withRouter(CommentForm);

