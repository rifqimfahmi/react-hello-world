import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Counter, { CounterRef } from "./components/counter";
import Input, { InputRef } from "./components/input";

function App() {
  const counterRef = useRef<CounterRef>(null);
  const inputRef = useRef<InputRef>(null);
  return (
    <div className="container px-4">
      <div>
        <Counter></Counter>
        <Counter initialValue={5}></Counter>
        <Counter initialValue={10}></Counter>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-4 p-2">
          <div className="border p-3">
            <h3>Parent Component Ref</h3>
            <Counter ref={counterRef}></Counter>
            <Input ref={inputRef}></Input>
            <Button
              className="mt-3"
              variant="danger"
              onClick={() => {
                counterRef.current?.reset();
                inputRef.current?.reset();
              }}
            >
              Reset All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
