import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((r, r_index) => (
        <p key={r_index} className="guess">
          <Guess guess={guesses[r_index]} answer={answer}></Guess>
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
