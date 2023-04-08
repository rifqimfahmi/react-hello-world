import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import { FormControl } from "react-bootstrap";

export type InputRef = {
  reset: () => void;
};

const Input = forwardRef((_: unknown, ref: Ref<InputRef>) => {
  const [value, setValue] = useState<string>("");
  useImperativeHandle(ref, () => {
    return {
      reset: () => {
        setValue("");
      },
    };
  });
  return (
    <>
      <FormControl
        type="email"
        placeholder="Enter email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
});

export default Input;
