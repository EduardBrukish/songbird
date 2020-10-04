import React from 'react';

import './NextLevel.scss'

const NextLevel = () => {

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