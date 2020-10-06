import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBirdsStatus, changeAnswerStatus, changePoints, changeScore } from '../../reducers/actions';
import NextLevel from '../next-level/NextLevel';

import './QuizField.scss';

const QuizField = () => {

  const questionNumber = useSelector(state => state.app.questionNumber);
  const hiddenBird = useSelector(state => state.app.hiddenBird);
  const points = useSelector(state => state.app.points);
  const score = useSelector(state => state.app.score);
  const isRightAnswer = useSelector(state => state.app.isRightAnswer);
  const birdsData = useSelector(state => state.birdsData)
  const dispatch = useDispatch();

  const showBirdInfo = (id) => {
    if(!isRightAnswer) {
      dispatch(updateBirdsStatus(id));
      dispatch(changePoints(points - 1));
    }
    if( id === hiddenBird.id && !isRightAnswer) {
      dispatch(changeScore(score + points));
      dispatch(changeAnswerStatus(true));
    }
  }
  
  const data = birdsData.map((item) => {

    let classes = "answer-marker";
    if(item.isAnswered) {
      const addedClass = (item.id === hiddenBird.id) ? ' right-answer' : ' error-answer';
      classes += addedClass
    }
    
    return (
    <li 
      className="list-group-item bird-item" 
      onClick={ () => showBirdInfo(item.id)} 
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