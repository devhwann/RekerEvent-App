import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette'
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const CommentListBlock = styled.div`
  // display:flex;
  // justify-content:space-evenly;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;  
  }
`;


const CommentCard = styled.div`
  width: 40%;
  height:150px; 
  background:#fff;
  box-shadow: 0px 14px 26px -11px #000;
  text-align:left;
  padding: 1rem;

  p {
    display:flex;
    justify-content:space-between;
    span {
      color: ${palette.gray[5]};
    }
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

const CommentList = ({ comments, error,loading }) => {
  if (error) {
    return <CommentListBlock>에러가 발생했습니다.</CommentListBlock>;
  }

//  const { body} = comment;
  return (
    <CommentListBlock>
    {/* <h2>댓글</h2> */}
        {/* <CommentCard>
          <p>돌담 <span>2020-06-29</span></p>          
          <p>너무 기대가 되는 프로세스 입니다. 앞으로도 정말 많은 행보와 기대를 걸고 투자를 합니다 ! 그리고 이 투자에 성공에 기원을 기도합니다.</p>
        </CommentCard>
        <CommentCard>
          <p>돌담 <span>2020-06-29</span></p>          
          <p>너무 기대가 되는 프로세스 입니다. 앞으로도 정말 많은 행보와 기대를 걸고 투자를 합니다 ! 그리고 이 투자에 성공에 기원을 기도합니다.</p>
        </CommentCard>
        <CommentCard>
          <p>돌담 <span>2020-06-29</span></p>          
          <p>너무 기대가 되는 프로세스 입니다. 앞으로도 정말 많은 행보와 기대를 걸고 투자를 합니다 ! 그리고 이 투자에 성공에 기원을 기도합니다.</p>
        </CommentCard> */}
        {/* 2개의 Card를 묶어서 거거다가 flex를 준다. 반복. */}
        {/* <CommentCard>

        </CommentCard> */}

        {!loading && comments && (
        <div>
      {comments.map(comment => (
        <CommentItem comment={comment} />
      ))}
      </div>
      )}
            {/*  map of null 은 위의 loading 조건식이 필요함. */}
    
      </CommentListBlock>
  );
};

export default CommentList;
