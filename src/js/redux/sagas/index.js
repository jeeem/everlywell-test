import { all } from 'redux-saga/effects'
import { homeSaga } from './homeSaga';
import { modalSaga } from './modalSaga';


export default function* sagas() {
  yield all([
    ...homeSaga,
    ...modalSaga,
  ]);
}
