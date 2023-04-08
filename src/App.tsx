import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Counter from "./components/counter";

function App() {
  return (
    <>
      <Counter></Counter>
      <Counter initialValue={5}></Counter>
      <Counter initialValue={10}></Counter>
    </>
  );
}

export default App;
