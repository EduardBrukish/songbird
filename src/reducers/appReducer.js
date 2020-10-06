import { CHANGE_ANSWER_STATUS, NEXT_QUESTION, CHANGE_POINTS, CHANGE_SCORE, START_AGAIN } from './types';
import BirdService from '../services/bird-service';

const birdService = new BirdService();

const initialState = {
  questionNumber: 0,
  score: 0,
  isRightAnswer: false,
  points: 5,
  hiddenBird: birdService.getRandomBird(0),
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ANSWER_STATUS: 
      return Object.assign({...state},{ isRightAnswer: action.status });
    case NEXT_QUESTION: 
      return Object.assign({...state},{ isRightAnswer: false, questionNumber: action.questionNumber, hiddenBird: birdService.getRandomBird(action.questionNumber),  points: 5 })
    case CHANGE_POINTS: 
      return Object.assign({...state},{ points: action.points });
    case CHANGE_SCORE: 
      return Object.assign({...state},{ score: action.score });
    case START_AGAIN: 
      return initialState;
    default:
      return state;
  }
} 