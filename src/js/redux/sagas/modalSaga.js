import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { constants as modalConstants, actions as modalActions } from '../modules/modal';

import { getNamedRecipe } from '../../common/api';

export function* fetchModalData() {
  let currentLocation = 'pancakes';
  if (window.location.hash.length > 2) {
    currentLocation = window.location.hash.substr(2);
  }
  let foo = yield call(getNamedRecipe, currentLocation);
  yield put(modalActions.updateModalRecipe(foo));
}


function* watchGetModal() {
  yield takeLatest(modalConstants.GET_MODAL, fetchModalData);
}

export const modalSaga = [
  fork(watchGetModal),
];
