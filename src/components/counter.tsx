import {
  Dispatch,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";

interface State {
  count: number;
}

interface Props {
  initialValue?: number;
}

export type CounterRef = {
  reset: () => void;
};

function increaseCounter(state: State, setState: Dispatch<State>) {
  setState({ count: state.count + 1 });
}

function resetCounter(state: State, setState: Dispatch<State>) {
  setState({ count: 0 });
}

const Counter = forwardRef<CounterRef, Props>(({ initialValue = 0 }, ref) => {
  const [state, setState] = useState<State>({ count: initialValue });
  useImperativeHandle(ref, () => {
    return {
      reset: () => {
        resetCounter(state, setState);
      },
    };
  });
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
});

export default Counter;
