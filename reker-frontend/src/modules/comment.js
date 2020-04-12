import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentsAPI from '../lib/api/comments';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_COMMENT,
  WRITE_COMMENT_SUCCESS,
  WRITE_COMMENT_FAILURE,
] = createRequestActionTypes('write/WRITE_COMMENT'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
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
  body: '',
  comment: null,
  commentError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_COMMENT]: state => ({
      ...state,
      // post와 postError를 초기화
      comment: null,
      commentError: null,
    }),
    // 포스트 작성 성공
    [WRITE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    // 포스트 작성 실패
    [WRITE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState,
);

export default write;
