import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  let classes = checkGuess(guess, answer);
  return (
    <>
      {range(5).map((c_index) => {
        let letter = !!guess ? guess[c_index] : "nope";
        let status =
          !!classes && classes.find((elem) => elem.letter === letter).status;
        return (
          <span key={c_index} className={`cell ${status}`}>
            {!!guess ? guess[c_index] : ""}
          </span>
        );
      })}
      ;
    </>
  );
}

export default Guess;
