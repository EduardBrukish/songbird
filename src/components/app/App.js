import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../header/Header';
import RandomBird from '../random-bird/RandomBird';
import QuizField from '../quiz-field/QuizField';
import FinalWindow from '../final-window/FinalWindow'

const MainLayout = () => {
  return <React.Fragment>
          <RandomBird />
          <QuizField />
         </React.Fragment>
}

function App() {

  const bird = useSelector(state => state.app.hiddenBird);
  const mainLayout = (bird) ? <MainLayout /> 
    : <FinalWindow />;

  return (
    <div className="App">
      <Header />
      {mainLayout}
    </div>
  );
}

export default App;
