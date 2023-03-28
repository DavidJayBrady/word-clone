import React from "react";

import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    let newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  }

  let gameIsWon = !!guesses.find((elem) => elem === answer);
  let gameIsLost = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  let gameIsOver = gameIsWon || gameIsLost;

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput addGuess={addGuess} disabled={gameIsOver}></GuessInput>
      {gameIsOver && <EndGameBanner victory={!!gameIsWon}></EndGameBanner>}
    </>
  );
}

export default Game;
