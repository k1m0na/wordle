import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState('');

  return (
    <>
      <GuessList 
        guesses={guesses}
        answer={answer}
        hasWon={hasWon}
        setHasWon={setHasWon}
      />
      <GuessInput 
        setGuesses={setGuesses}
        guesses={guesses}
        hasWon={hasWon}
      />
      <Banner 
        hasWon={hasWon} 
        numOfGuesses={guesses.length} 
      />
    </>
  );
}

export default Game;
