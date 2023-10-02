import { useContext } from "react";
import { TestContext } from "./App";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useContext(TestContext);
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question:{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
