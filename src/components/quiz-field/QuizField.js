import React from 'react';

import './QuizField.scss';

const QuizField = () => {

  return(
    <div className="row">
    <div className="col-md-6 bird-list">
    <ul className="list-group">
      {/* {data} */}
    </ul>
    </div>
    <div className="col-md-6">
      <div className="card selected-bird">
        {/* {birdCard} */}
      </div>
    </div>
  </div>
  )
};

export default QuizField;