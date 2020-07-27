import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette'
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const CommentFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;  
  }
`;

const Privacy = styled.div`  

  p {
    height: 50px;
    overflow: auto;
  }
`

/**
 * 스타일링된 input
 */

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  // border-bottom: 1px solid ${palette.gray[5]};
  background:none;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    // border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Checkinput = styled.input`
  background: red;
  border: 0;
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  event: '사전등록',
};



/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

  

const Comment = ({ form, onChange, onSubmit, error }) => {
  
  return (
    <CommentFormBlock>
      <form onSubmit={onSubmit}>
      <StyledInput
          autoComplete="body"
          name="body"
          placeholder="댓글을 입력해주세요."
          onChange={onChange}
          value={form.body}
          maxLength="100"
        />
    {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem', width: '20%' }}>
          등록하기
        </ButtonWithMarginTop>
        </form>        
      </CommentFormBlock>
  );
};

export default Comment;
