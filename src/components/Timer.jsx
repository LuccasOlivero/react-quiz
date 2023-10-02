import { useContext, useEffect } from "react";
import { TestContext } from "./App";

function Timer() {
  const { dispatch, secondsRemaining } = useContext(TestContext);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds}
      {seconds < 10 && "0"}
    </div>
  );
}

export default Timer;
