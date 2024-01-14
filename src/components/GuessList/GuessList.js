import React from 'react';

function GuessList({guesses}) {
  console.log(guesses)
  return (
    <div className='guess-results'>
       {guesses.map(guess => (
         <p 
          className='guess'
          key={crypto.randomUUID()}
        >{guess}</p>
       ))}
    </div>
  );
}

export default GuessList;
