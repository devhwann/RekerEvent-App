import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_COMMENTS,
  LIST_COMMENTS_SUCCESS,
  LIST_COMMENTS_FAILURE,
] = createRequestActionTypes('comments/LIST_COMMENTS');

export const listComments = createAction(
  LIST_COMMENTS,
  ({ body, username ,page }) => ({ body, username ,page }),
);

const listCommentsSaga = createRequestSaga(LIST_COMMENTS, commentAPI.listComments);
export function* commentsSaga() {
  yield takeLatest(LIST_COMMENTS, listCommentsSaga);
}

const initialState = {
  comments: null,
  error: null,
  lastPage: 1,
};

const comments = handleActions(
  {
    [LIST_COMMENTS_SUCCESS]: (state, { payload: comments, meta: response }) => ({
      ...state,
      comments,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_COMMENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,      
    }),
  },
  initialState,
);

export default comments;