import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './RandomBird.scss';
import birdImage from '../../assets/bird.jpg';

const RandomBird = () => {

  const birdName = '******'

  return(
    <div className="random-bird card d-flex">
        <img className="bird-image" 
             src={ birdImage } 
            //  alt={`Картинка ${hiddenRandomBird.name}`}
        />
        <div className="bird-info">
          <p className="bird-name">{ birdName }</p>
          <div>
          <AudioPlayer
            autoPlay={ false }
            // src={hiddenRandomBird.audio}
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