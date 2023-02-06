import React, { useState } from "react";

const Multiple = () => {
  const [mode, setMode] = useState("single");
  const [questions, setQuestions] = useState("");

  const handleModeToggle = () => {
    setMode(mode === "single" ? "sequence" : "single");
  };

  const handleTextAreaChange = (event) => {
    setQuestions(event.target.value);
  };

  const handleSubmit = () => {
    let questionsArray;
    if (mode === "single") {
      questionsArray = [questions];
    } else {
      questionsArray = questions.split("\n");
      console.log(questionsArray);
    }
    // logic to submit the questionsArray to the server
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={mode === "sequence"}
            onChange={handleModeToggle}
          />
          Send multiple questions in a sequence
        </label>
      </div>
      <textarea
        value={questions}
        rows="5"
        cols={30}
        onChange={handleTextAreaChange}
        placeholder={mode === "single" ? "Enter your question" : "Enter your questions, separated by a newline"}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Multiple;
