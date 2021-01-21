import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette';
import Button from '../common/Button';
import Axios from 'axios';
import SubInfo from '../common/SubInfo';
import CommentActionButtons from './CommentActionButtons';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const CommentListBlock = styled.div`
   
  padding-bottom: 1.5rem;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const CommentListFlex = styled.div`

`


const CommentCard = styled.div`
  width: 40%;
  height: auto;
  background: #fff;
  box-shadow: 0px 14px 26px -11px #000;
  text-align: left;
  padding: 1rem;
  margin-top: 1.5rem;
  display:inline-block;
  margin: 2rem;

  p {
    display: flex;
    justify-content: space-between;
    span {
      color: ${palette.gray[5]};
    }
  }
  @media only screen and (max-width: 600Px) {
    width:80%;
    margin: 1rem;
  }
  @media only screen and (max-width: 1024Px) {
    width:80%;
    
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

const CommentItem = ({ comment, actionButtons }) => {
  
  const { publishedDate, user, body, _id } = comment;
  return (
    <CommentCard>
      <p>        
        <Link to={`/@${user.username}/${_id}`}>{user.username}</Link>
        <span> {actionButtons}  {new Date(publishedDate).toLocaleDateString()} </span>
      </p>
      <p>
      <Link to={`/@${user.username}/${_id}`}>{body}</Link>
        
        </p>
      
      
    </CommentCard>
  );
};

const CommentList = ({ comments, error, loading,  comment, actionButtons,user}) => {

  if (error) {
    return <CommentListBlock>에러가 발생했습니다.</CommentListBlock>;
  }
  const ownComment = user && user._id 

  return (
    <CommentListBlock>
      <h2>댓글</h2>
      <p>여러분들의 의견을 남겨주세요!</p>
       {!loading && comments && (
        <CommentListFlex>
          {comments.map((comment) => (
            // <CommentItem comment={comment}  key={comment.comments}/>
            <CommentItem comment={comment} key={comment._id}    />
          ))}
        </CommentListFlex>
      )}
      <div>
{actionButtons}

      </div>
      {/*  map of null 은 위의 loading 조건식이 필요함. */}
    </CommentListBlock>
  );
};

export default CommentList;