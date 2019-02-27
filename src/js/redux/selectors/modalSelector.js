import { createSelector } from 'reselect';

const modalDataSelector = (state) => state.modal;

const resultSelector = createSelector(
  modalDataSelector,
  (payload) => payload.get('recipe')
);

export const modalSelector = (state) => ({
  recipe: resultSelector(state),
});
