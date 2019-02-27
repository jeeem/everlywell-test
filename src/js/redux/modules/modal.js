import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const GET_MODAL = 'app/modal/GET_MODAL';
const UPDATE_MODAL = 'app/modal/UPDATE_MODAL';

export const constants = {
  GET_MODAL,
  UPDATE_MODAL,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getModalRecipe = createAction(GET_MODAL, () => ({}));
export const updateModalRecipe = createAction(UPDATE_MODAL, (recipe) => ({ recipe }));

export const actions = {
  getModalRecipe,
  updateModalRecipe,
};

export const reducers = {
  [UPDATE_MODAL]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  recipe: null,
})

export default handleActions(reducers, initialState());
