import Options from "./Options";

function Questions({ questions }) {
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} />
    </div>
  );
}

export default Questions;
