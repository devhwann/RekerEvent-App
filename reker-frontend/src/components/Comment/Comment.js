import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette';
import Button from '../common/Button';


const CommentFormBlock = styled.div `

`

const CommentWrite = styled.input `

`


const Comment = (comments) => {
  return (
      <CommentFormBlock>
        <CommentWrite
          placeholder="Comemnt writing."
          
          value={body}
        />

      </CommentFormBlock>
  );
};

export default Comment;