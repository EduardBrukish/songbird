import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './RandomBird.scss';
import birdIcon from '../../assets/bird.jpg';

const RandomBird = () => {

  const hiddenBird = useSelector(state => state.app.hiddenBird);
  const isRightAnswer = useSelector(state => state.app.isRightAnswer);
  
  const birdName = isRightAnswer ? hiddenBird.name : '********';
  const birdImage = isRightAnswer ? hiddenBird.image : birdIcon;
console.log(`hidden bird: ${hiddenBird.name}`)
  return(
    <div className="random-bird card d-flex">
        <img className="bird-image" 
             src={ birdImage } 
             alt={`Картинка ${hiddenBird.name}`}
        />
        <div className="bird-info">
          <p className="bird-name">{ birdName }</p>
          <div>
          <AudioPlayer
            autoPlay={ false }
            src={hiddenBird.audio}
            layout='horizontal-reverse'
            showJumpControls={ false }
            customAdditionalControls={ [] }
            autoPlayAfterSrcChange={ false }
          />
          </div>
        </div>
      </div>
  )
}

export default RandomBird