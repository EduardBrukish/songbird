import { UPDATE_BIRDS_STATUS, CHANGE_BIRDS_DATA, CHANGE_ANSWER_STATUS, NEXT_QUESTION, CHANGE_POINTS, CHANGE_SCORE } from './types';

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