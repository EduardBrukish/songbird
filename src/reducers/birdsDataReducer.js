import { CHANGE_BIRDS_STATUS } from './types';
import BirdService from '../services/bird-service';

const birdService = new BirdService();

const initialState = birdService.getBirds(0);

export const birdsData = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_BIRDS_STATUS: {
      return state.map((item) => {
        if(item.id === action.id) {
          item.isAnswered = true
        }
        return item
      })
    }
    default: 
      return state;
  }
}