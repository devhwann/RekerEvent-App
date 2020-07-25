import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette'
import Button from '../common/Button';
import Axios from 'axios'

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const CommentListBlock = styled.div`
  // display:flex;
  // justify-content:space-evenly;
  padding-bottom: 1.5rem;
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
  margin-top:1.5rem;

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

<CommentCard>
<p> {_id} <span> {publishedDate} </span></p>          
<p>{body}</p>
</CommentCard>
  )
}




const CommentList = ({ comments, error,loading  }) => {
  const [data, setData, setComments ] = useState({ comments : []})
  if (error) {
    return <CommentListBlock>에러가 발생했습니다.</CommentListBlock>;
  }



// useEffect(async () => { 
// })
//  const { body} = comment;
  return (
    <CommentListBlock>
    {/* <h2>댓글</h2> */}      
        {/* 2개의 Card를 묶어서 거거다가 flex를 준다. 반복. */}
        {/* <CommentCard>

        </CommentCard> */}

        {!loading && comments && (
        <div>
      {comments.map(comment => (
        // <CommentItem comment={comment}  key={comment.comments}/>
        <CommentItem comment={comment}  key={comment._id}/>
      ))}
      </div>
      )}
            {/*  map of null 은 위의 loading 조건식이 필요함. */}
    
      </CommentListBlock>
  );
};

export default CommentList;
