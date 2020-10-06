import { UPDATE_BIRDS_STATUS, 
         CHANGE_BIRDS_DATA, 
         CHANGE_ANSWER_STATUS, 
         NEXT_QUESTION, 
         CHANGE_POINTS, 
         CHANGE_SCORE, 
         UPDATE_CURREN_BIRD,
         START_AGAIN } from './types';

export const updateBirdsStatus = (id) => {
  return {
    type: UPDATE_BIRDS_STATUS,
    id
  }
}

export const changeBirdsData = (questionNumber) => {
  return {
    type: CHANGE_BIRDS_DATA,
    questionNumber
  }
}

export const changeAnswerStatus = (status) => {
  return {
    type: CHANGE_ANSWER_STATUS,
    status
  }
}

export const getNextQuestion = (questionNumber) => {
  return {
    type: NEXT_QUESTION,
    questionNumber
  }
}

export const changePoints = (points) => {
  return {
    type: CHANGE_POINTS,
    points
  }
}

export const changeScore = (score) => {
  return {
    type: CHANGE_SCORE,
    score
  }
}

export const updateCurrentBird = (bird) => {
  return {
    type: UPDATE_CURREN_BIRD,
    selectedBird: bird
  }
}

export const startAgain = () => {
  return {
    type: START_AGAIN
  }
}