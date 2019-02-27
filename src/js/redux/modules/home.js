import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const GET_RECIPES = 'app/home/GET_RECIPES';
const UPDATE_RECIPES = 'app/home/UPDATE_RECIPES';

export const constants = {
  GET_RECIPES,
  UPDATE_RECIPES,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getFiveRecipes = createAction(GET_RECIPES, () => ({}));
export const updateRecipes = createAction(UPDATE_RECIPES, (recipes) => ({ recipes }));

export const actions = {
  getFiveRecipes,
  updateRecipes,
};

export const reducers = {
  [UPDATE_RECIPES]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  recipes: null,
})

export default handleActions(reducers, initialState());
