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



// saga 생성
const writeSaga = createRequestSaga(WRITE, commentAPI.write);

export function* commentSaga() {
  yield takeLatest(WRITE, writeSaga);
}

const initialState = {
  write: {
    body: '',
  },
  comment: null,
  event: null,
  commentError: null,
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
    // 회원가입 성공
    [WRITE_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      commentError: null,
      comment,
    }),
    // 회원가입 실패
    [WRITE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      commentError: error,
    }),
  },
  initialState,
);


export default comment;
