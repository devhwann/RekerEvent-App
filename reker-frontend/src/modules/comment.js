import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';

const CHANGE_FIELD = 'comment/CHANGE_FIELD';
const INITIALIZE_FORM = 'comment/INITIALIZE_FORM';

const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes(
  'comment/WRITE',
);

const SET_ORIGINAL_COMMENT = 'comment/SET_ORIGINAL_COMMENT';
const [
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
] = createRequestActionTypes('comment/UPDATE_COMMENT'); // 포스트 수정

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // write , login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // write / login
export const write = createAction(WRITE, ({body}) => ({
  body
}));
export const setOriginalComment = createAction(SET_ORIGINAL_COMMENT, comemnt => comemnt);
export const updateComment = createAction(
  UPDATE_COMMENT,
  ({body}) => ({
    body
  }),
);



// saga 생성
const writeSaga = createRequestSaga(WRITE, commentAPI.write);
const updateCommentSaga = createRequestSaga(UPDATE_COMMENT, commentAPI.updateComment);

export function* commentSaga() {
  yield takeLatest(WRITE, writeSaga);
  yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
}

const initialState = {
  write: {
    body: '',
  },
  comment: null,
  // event: null,
  commentError: null,
  originalCommentId: null
};

const comment = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.write.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      commentError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 댓글 작성 성공
    [WRITE_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      commentError: null,
      comment,
    }),
    // 댓글 작성 실패
    [WRITE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      commentError: error,
    }),
    [SET_ORIGINAL_COMMENT]: (state, { payload: comment }) => ({
      ...state,
      body: comment.body,
      originalCommentId: comment._id,
    }),
    [UPDATE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [UPDATE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState,
);


export default comment;
