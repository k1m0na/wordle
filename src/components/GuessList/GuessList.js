import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from  '../../constants';
import { range } from '../../utils';

function GuessList({ guesses, answer, hasWon, setHasWon }) {
  
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map( (index) => (
        <Guess 
          key={crypto.randomUUID()} 
          value={guesses[index]} 
          answer={answer}
          guesses={guesses}
          hasWon={hasWon}
          setHasWon={setHasWon}
        />
      ))}

    </div>
  );
}

export default GuessList;
