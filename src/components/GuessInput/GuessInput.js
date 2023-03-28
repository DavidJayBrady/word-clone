import React from "react";

function GuessInput({ addGuess, disabled }) {
  let [text, setText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (text.length !== 5) {
      return;
    }
    addGuess(text);
    setText("");
  }

  function handleInput(event) {
    if (event.target.value.length > 5) {
      return;
    }
    setText(event.target.value.toUpperCase());
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        value={text}
        onChange={(event) => handleInput(event)}
        id="guess-input"
        type="text"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
