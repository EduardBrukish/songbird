import React from 'react';

import Header from '../header/Header';
import RandomBird from '../random-bird/RandomBird';
import QuizField from '../quiz-field/QuizField'

function App() {
  return (
    <div className="App">
      <Header />
      <RandomBird />
      <QuizField />
    </div>
  );
}

export default App;
