import React from 'react';
import { useSelector } from 'react-redux';
import NextLevel from '../next-level/NextLevel';
import BirdService from '../../services/bird-service';

import './QuizField.scss';

const QuizField = () => {

  const questionNumber = useSelector(state => state.app.questionNumber)
  const birdsService = new BirdService();
  const birdsData = birdsService.getBirds(questionNumber);
  
  const data = birdsData.map((item) => {

    let classes = "answer-marker";
    // if(item.isAnswered) {
    //   const addedClass = (item.id === hiddenRandomBird.id) ? ' right-answer' : ' error-answer';
    //   classes += addedClass
    // }
    
    return (
    <li 
      className="list-group-item bird-item" 
      // onClick={ () => showBirdInfo(item.id)} 
      key={item.id}>
      <span className={ classes }></span>
        {item.name}
    </li>
    )
  })

  return(
    <div className="row">
    <div className="col-md-6 bird-list">
    <ul className="list-group">
      {data}
    </ul>
    </div>
    <div className="col-md-6">
      <div className="card selected-bird">
        {/* {birdCard} */}
      </div>
    </div>
    <NextLevel />
  </div>
  )
};

export default QuizField;