import React from 'react';

import { range } from '../../utils';
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer, guesses, hasWon, setHasWon }) {

  const guessStatus = checkGuess(value, answer);

  value === answer ? setHasWon(true) : setHasWon(false) ;
  
  return (
    <>
      <p className="guess">
        {range(5).map( (num) => (
          <span className={`cell ${value ? guessStatus[num].status : ''}`} key={num}>
            { value ? value[num] : undefined }
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
