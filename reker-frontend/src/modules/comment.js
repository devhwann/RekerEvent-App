import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentsAPI from '../lib/api/comments';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE_FORM = 'comments/INITIALIZE_FORM';
// const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const CHANGE_FIELD = 'comments/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_COMMENT,
  WRITE_COMMENT_SUCCESS,
  WRITE_COMMENT_FAILURE,
] = createRequestActionTypes('write/WRITE_COMMENT'); // 포스트 작성

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const changeField = createAction(CHANGE_FIELD, ({ form ,key, value }) => ({
  form,
  key,
  value,
}));
export const writeComment = createAction(WRITE_COMMENT, ({ body }) => ({
  body,
}));

// saga 생성
const writeCommentSaga = createRequestSaga(WRITE_COMMENT, commentsAPI.writeComment);
export function* writeSaga() {
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
}

const initialState = {
  comment : {
    body : ''
  },
  // body: '',
  comment: null,
  commentError: null,
};

const comment = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [WRITE_COMMENT]: state => ({
      ...state,
      // post와 postError를 초기화
      comment: null,
      commentError: null,
    }),
    // 댓글 작성 성공
    [WRITE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    // 댓글 작성 실패
    [WRITE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState,
);

export default comment;
