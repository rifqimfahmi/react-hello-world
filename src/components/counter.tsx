import { Dispatch, useState } from "react";
import { Button } from "react-bootstrap";

interface State {
  count: number;
}

interface Props {
  initialValue?: number;
}

function increaseCounter(state: State, setState: Dispatch<State>) {
  setState({ count: state.count + 1 });
}

function resetCounter(state: State, setState: Dispatch<State>) {
  setState({ count: 0 });
}

const Counter = ({ initialValue = 0 }: Props) => {
  const [state, setState] = useState<State>({ count: initialValue });
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
