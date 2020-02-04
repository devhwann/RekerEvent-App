import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import event, { eventSaga } from './auth';
import loading from './loading';
// import event from './event';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user
});

export function* rootSaga() {
  yield all([authSaga(), eventSaga(), userSaga()]);
}

export default rootReducer;
