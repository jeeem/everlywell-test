import { createSelector } from 'reselect';

const homeDataSelector = (state) => state.home;

const resultSelector = createSelector(
  homeDataSelector,
  (payload) => payload.get('recipes')
);

export const homeSelector = (state) => ({
  recipes: resultSelector(state),
});
