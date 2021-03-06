import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextQuestion, changeBirdsData, updateCurrentBird } from '../../reducers/actions';

import './NextLevel.scss'

const NextLevel = () => {

  const isRightAnswer = useSelector(state => state.app.isRightAnswer);
  const questionNumber = useSelector(state => state.app.questionNumber);
  const dispatch = useDispatch();

  const nextQuestion = () => {
    dispatch(changeBirdsData(questionNumber + 1));
    dispatch(getNextQuestion(questionNumber + 1));
    dispatch(updateCurrentBird(null));
  }

  let classes = 'btn';

  if(isRightAnswer) {
    classes += ' btn-success btn-next'
  }

  return(
    <button 
      className={ classes } 
      disabled={ !isRightAnswer }
      onClick={ () => nextQuestion()}
      >Next level</button>
  )
}

export default NextLevel