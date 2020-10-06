import { UPDATE_CURREN_BIRD } from './types';

const initialState = {
  currentBird: null,
};

export const currentBird = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURREN_BIRD: 
      return Object.assign({...state},{ currentBird: action.selectedBird });
    default:
      return state
  }
}