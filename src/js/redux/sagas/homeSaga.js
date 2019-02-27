import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { constants as homeConstants, actions as homeActions } from '../modules/home';

import { getRandomRecipe } from '../../common/api';

export function* fetchHomeData() {
  let foo = yield call(getRandomRecipe);
  yield put(homeActions.updateRecipes(foo));
}


function* watchGetHome() {
  yield takeLatest(homeConstants.GET_RECIPES, fetchHomeData);
}

export const homeSaga = [
  fork(watchGetHome),
];
