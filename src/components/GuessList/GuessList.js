import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from  '../../constants';
import { range } from '../../utils';

function GuessList({ guesses }) {
  console.log(guesses);
  
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map( (index) => (
        <Guess key={crypto.randomUUID()} value={guesses[index]} />
      ))}

    </div>
  );
}

export default GuessList;
