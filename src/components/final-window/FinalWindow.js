import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startAgain } from '../../reducers/actions';

import student from '../../assets/study.png';
import chicken from '../../assets/chicken.png';

import './FinalWindow.scss'

const HighScore = () => {
  return(
    <div className="d-flex high-score">
      <p className="high-score__congratulation">
        <span> Отлично! Вы набрали максимальное количество очков! </span>
        <span> Вам присвоена степень: "Магистр соловьиных наук!" </span>
        <span> Поздравляем!!! </span>
      </p>
      <img src={student} alt='Картинка ученика'/>
    </div>
  )
}

const FinalWindow = () => {

  const score = useSelector(state => state.app.score);
  const dispatch = useDispatch();

  
  const playAgain = () => {
    dispatch(startAgain());
  }

  const finalMessage = <div className="d-flex total-score">
                          <span>
                          Вы набрали {score} очков из 30 возможных. Нужно еще потренироваться!
                          </span>
                          <img src={chicken} alt="Картинка цыпленка" />
                          <button onClick={() => playAgain()}  className="btn btn-success btn-again">Попробовать еще раз</button>
                        </div>;

  const message = ( score===30 ) ? <HighScore />  : finalMessage;

  return (
    <div className="card">
        { message }
    </div>
  )
}

export default FinalWindow