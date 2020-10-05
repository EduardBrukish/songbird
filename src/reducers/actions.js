import { CHANGE_BIRDS_STATUS, CHANGE_ANSWER_STATUS, NEXT_QUESTION } from './types';

export const changeBirdsStatus = (id) => {
  return {
    type: CHANGE_BIRDS_STATUS,
    id
  }
}

export const changeAnswerStatus = (status) => {
  return {
    type: CHANGE_ANSWER_STATUS,
    status
  }
}

export const getNextQuestion = (questionNumber) => {
  console.log(questionNumber)
  return {
    type: NEXT_QUESTION,
    questionNumber
  }
}