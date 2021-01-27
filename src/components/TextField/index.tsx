// @flow
import * as React from "react";
import { useState } from "react";
import "./index.css";
interface TextFieldProps {
  id: string;
  label: string;
  onChange: (value: string) => void;
}

//props = propriedades
// REact.fc e tipo
export const TextField: React.FC<TextFieldProps> = (props) => {
  const { id, label, onChange } = props;
  const [value, setValue] = useState("");
  return (
    <div className="TextField">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => {
          const  newValue = event.target.value;
          setValue(newValue);
          onChange(newValue);
        }}
      />
    </div>
  );
};
