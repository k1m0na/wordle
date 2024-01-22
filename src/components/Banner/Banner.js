import React from 'react';

function winOrLose(numOfGuesses, hasWon) {
  if (hasWon === true) {
    return "banner happy";
  } else if (numOfGuesses >= 6) {
    return "banner sad";
  }
};

function Banner({numOfGuesses, hasWon}) {
  return (
    <>
      <div className={winOrLose(numOfGuesses, hasWon)}></div>
    </>
  );
}

export default Banner;
