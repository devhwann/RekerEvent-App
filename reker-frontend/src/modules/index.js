import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import comment, { commentSaga } from './comment';
import loading from './loading';
import user, { userSaga } from './user';
import comments, { commentsSaga } from './comments';
import read, { readSaga } from './read';


const rootReducer = combineReducers({
  // comment,
  auth,
  comment,
  loading,
  user,
  comments,
  read
  
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), commentSaga(),commentsSaga(), readSaga() ]);
}

export default rootReducer;
