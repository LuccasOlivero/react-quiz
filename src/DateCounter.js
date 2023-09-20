import { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };
    case "inc":
      return { ...state, count: state.count + 1 };
    case "setCount":
      return { ...state, count: action.payload };
    default:
      throw new Error("Unknow action");
  }
}

function DateCounter() {
  const intialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, intialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: +e.target.value });
  };

  const defineStep = function (e) {};

  const reset = function () {};

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{count}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
