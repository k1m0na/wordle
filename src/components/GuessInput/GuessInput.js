import React from 'react';

function GuessInput({guesses, setGuesses}) {

  const [guess, setGuess ] = React.useState('');

  function setAndClearGuesses(){
    setGuesses([...guesses, guess]);
    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={ e=> {
        e.preventDefault();
        setAndClearGuesses();
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        name="guess-input" 
        id="guess-input"
        value={guess}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-z]{5}"
        title="5 letter word"
        onChange={ e => {
          const potentialWord = e.target.value;
          setGuess(potentialWord.toUpperCase());
        }} 
      />
    </form>
    
  );
}

export default GuessInput;
