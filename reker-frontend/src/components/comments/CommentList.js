import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette'
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const CommentListBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;  
  }
`;

/**
 * 스타일링된 input
 */

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;


const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

// const CommentItem = styled.div`
  
// `
  
const CommentItem = ({ comment }) => {
  const { publishedDate, user, body, _id } = comment;
  return (
    <div>
      <h2>
        {/* <Link to={`/@${user.username}/${_id}`}>{title}</Link> */}
      </h2>
        {/* // username={user.username}
        // publishedDate={new Date(publishedDate)} */}
      {/* <Tags tags={tags} /> */}
      <p>{body}</p>
    </div>
  )
}

const CommentList = ({ comment }) => {

 const { body} = comment;
  return (
    <CommentListBlock>
        {/* <Link to={`/@${user.username}/${_id}`}>{title}</Link> */}
          <p>{body}</p>
      
    
      </CommentListBlock>
  );
};

export default CommentList;
