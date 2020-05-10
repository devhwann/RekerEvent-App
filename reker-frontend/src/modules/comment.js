import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE_FORM = 'comment/INITIALIZE_FORM';
const CHANGE_FIELD = 'comment/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITECOMMENT,
  WRITECOMMENT_SUCCESS,
  WRITECOMMENT_FAILURE,
] = createRequestActionTypes('comment/WRITECOMMENT'); // 포스트 작성

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const changeField = createAction(CHANGE_FIELD, ({ form ,key, value }) => ({
  form,
  key,
  value,
}));

export const writeComment = createAction(WRITECOMMENT, ({ body }) => ({
  body,
}));

// saga 생성
const writecommentaga = createRequestSaga(WRITECOMMENT, commentAPI.writeComment);
export function* writeSaga() {
  yield takeLatest(WRITECOMMENT, writecommentaga);
}

const initialState = {
  writecomment : {
    body : '',
  },
  // body: '',
  comment: null,
  commentError: null,
};

const comment = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      commentError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // [WRITE_COMMENT]: state => ({
    //   ...state,
    //   // post와 postError를 초기화
    //   comment: null,
    //   commentError: null,
    // }),
    // 댓글 작성 성공
    [WRITECOMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    // 댓글 작성 실패
    [WRITECOMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState,
);

export default comment;
