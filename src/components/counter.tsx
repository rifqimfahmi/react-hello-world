import { Dispatch, useState } from "react";
import { Button } from "react-bootstrap";

interface CounterState {
  count: number;
}

function increaseCounter(
  state: CounterState,
  setState: Dispatch<CounterState>
) {
  setState({ count: state.count + 1 });
}

function resetCounter(state: CounterState, setState: Dispatch<CounterState>) {
  setState({ count: 0 });
}

const Counter = () => {
  const [state, setState] = useState<CounterState>({ count: 0 });
  return (
    <div>
      <span className="align-middle px-4">{state.count}</span>
      <Button
        variant="primary"
        className="mx-1 my-2"
        onClick={() => increaseCounter(state, setState)}
      >
        Increase
      </Button>
      <Button
        variant="primary"
        className="mx-1 my-2"
        onClick={() => resetCounter(state, setState)}
      >
        Reset
      </Button>
    </div>
  );
};

export default Counter;
