import { UPDATE_BIRDS_STATUS, CHANGE_BIRDS_DATA, START_AGAIN } from './types';
import BirdService from '../services/bird-service';

const birdService = new BirdService();

const initialState = birdService.getBirds(0);

export const birdsData = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_BIRDS_STATUS: {
      const newState = state.slice();
      return newState.map((item) => {
        if(item.id === action.id) {
          item.isAnswered = true
        }
        return item
      })
    }
    case CHANGE_BIRDS_DATA: {
      return birdService.getBirds(action.questionNumber)
    }
    case START_AGAIN: {
      return  birdService.getBirds(0)
    }
    default: 
      return state;
  }
}