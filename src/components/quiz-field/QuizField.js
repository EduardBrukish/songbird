import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { updateBirdsStatus, changeAnswerStatus, changePoints, changeScore, updateCurrentBird } from '../../reducers/actions';
import NextLevel from '../next-level/NextLevel';
import success from '../../assets/audio/success.mp3';
import fail from '../../assets/audio/fail.mp3';

import './QuizField.scss';

const QuizField = () => {

  const hiddenBird = useSelector(state => state.app.hiddenBird);
  const points = useSelector(state => state.app.points);
  const score = useSelector(state => state.app.score);
  const isRightAnswer = useSelector(state => state.app.isRightAnswer);
  const birdsData = useSelector(state => state.birdsData);
  const currentBird = useSelector(state => state.currentBird.currentBird);
  const dispatch = useDispatch();

  const actionHandler = (bird) => {
    playSound(bird.id)
    showBirdInfo(bird);
    storeHandler(bird.id);
  }

  const playSound = (id) => {
    if(isRightAnswer) return
    const audioWay = (id === hiddenBird.id) ? success : fail;
    const audio = new Audio(audioWay);
    audio.play()
  }

  const showBirdInfo = (bird) => {
    dispatch(updateCurrentBird(bird));
  }

  const storeHandler = (id) => {
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
      onClick={ () => actionHandler(item)} 
      key={item.id}>
      <span className={ classes }></span>
        {item.name}
    </li>
    )
  }) 

  const birdCard = currentBird ? <BirdCard bird={currentBird} /> : <p className="start-description">Прослушайте аудио и выберите птицу из списка.</p>

  return(
    <div className="row">
    <div className="col-md-6 bird-list">
    <ul className="list-group">
      {data}
    </ul>
    </div>
    <div className="col-md-6">
      <div className="card selected-bird">
        {birdCard}
      </div>
    </div>
    <NextLevel />
  </div>
  )
};


const BirdCard = ({ bird }) => {
  const { image, name, species, audio, description  } = bird;
  return (
    <React.Fragment>
      <div className="row bird-card-main">
        <img className="bird-image col-md-6" src={image} alt={`Картинка ${name}`}/>
        <ul className="list-group list-group-flush col-md-6">
          <li className="list-group-item"><span>{name}</span></li>
          <li className="list-group-item"><span>{species}</span></li>
        </ul>   
      </div>  
      <AudioPlayer
          autoPlay={ false }
          src={audio}
          layout='horizontal-reverse'
          showJumpControls={ false }
          customAdditionalControls={ [] }
          autoPlayAfterSrcChange={ false }
        />
      <p>{description}</p>
    </React.Fragment>
  )
}

export default QuizField;