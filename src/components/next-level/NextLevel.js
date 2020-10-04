import React from 'react';
import { useSelector } from 'react-redux';

import './NextLevel.scss'

const NextLevel = () => {

  const isRightAnswer = useSelector(state => state.app.isRightAnswer);
  let classes = 'btn';
  if(isRightAnswer) {
    classes += ' btn-success btn-next'
  }

  return(
    <button 
      className={ classes } 
      disabled={ !isRightAnswer }
      // onClick={ () => nextQuestion()}
      >Next level</button>
  )
}

export default NextLevel