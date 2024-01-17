import React from 'react';
import Banner from "../Banner"

import { range } from '../../utils';
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {

  const guessStatus = checkGuess(value, answer);
  
  return (
    <>
      <p className="guess">
        {range(5).map( (num) => (
          <span className={`cell ${value ? guessStatus[num].status : ''}`} key={num}>
            { value ? value[num] : undefined }
          </span>
        ))}
      </p>
      <Banner />
    </>
  );
}

export default Guess;
