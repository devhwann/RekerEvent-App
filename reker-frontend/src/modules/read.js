import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_COMMENT,
  READ_COMMENT_SUCCESS,
  READ_COMMENT_FAILURE,
] = createRequestActionTypes('comment/READ_COMMENT');
const UNLOAD_COMMENT = 'comment/UNLOAD_COMMENT'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readComment = createAction(READ_COMMENT, id => id);
export const unloadComment = createAction(UNLOAD_COMMENT);

const readCommentSaga = createRequestSaga(READ_COMMENT, commentAPI.readComment);
export function* readSaga() {
  yield takeLatest(READ_COMMENT, readCommentSaga);
}

const initialState = {
  comment: null,
  error: null,
} ;

const read = handleActions(
  {
    [READ_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [READ_COMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_COMMENT]: () => initialState,
  },
  initialState,
);

export default read;
