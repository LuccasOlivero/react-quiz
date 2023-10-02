import { useContext } from "react";
import Options from "./Options";
import { TestContext } from "./App";

function Questions() {
  const { questions, dispatch, answer } = useContext(TestContext);
  // console.log(questions);
  return (
    <div>
      <h4>{questions?.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
