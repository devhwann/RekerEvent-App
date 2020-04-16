import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../styles/lib/palette';
import Button from '../common/Button';


// const onChangeBody = e => {
//   onChangeField({ key: 'title', value: e.target.value });
// };


const CommentFormBlock = styled.div `

`

const CommentWrite = styled.input `


`
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
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
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;


const CommentForm = ( form, onChange, onSubmit, error) => {
  return (
      <CommentFormBlock>
        <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="comment"
          name="comment"
          placeholder="comment write"
          onChange={onChange}
          value={form.comment}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          등록
        </ButtonWithMarginTop>
        </form>
        {/* <CommentWrite
          placeholder="Comemnt writing."
          onChange={onChangeBody}
          value={body}
        /> */}

      </CommentFormBlock>
  );
};

export default CommentForm;