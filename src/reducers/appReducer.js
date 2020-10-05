import { CHANGE_ANSWER_STATUS, NEXT_QUESTION } from './types';
import BirdService from '../services/bird-service';

const birdService = new BirdService();

const initialState = {
  questionNumber: 0,
  score: 0,
  isRightAnswer: false,
  hiddenBird: birdService.getRandomBird(0),
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ANSWER_STATUS: 
      return Object.assign({...state},{ isRightAnswer: action.status });
    case NEXT_QUESTION: 
      return Object.assign({...state},{ isRightAnswer: false, questionNumber: action.questionNumber, hiddenBird: birdService.getRandomBird(action.questionNumber) })
    default:
      return state;
  }
} 