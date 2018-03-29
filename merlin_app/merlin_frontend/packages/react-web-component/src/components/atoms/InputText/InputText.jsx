import React from "react";

const InputText = ({ onChange, onInsert, ...rest }) => {
  return (
    <input
      type="text"
      onChange={e => onChange(e.target.value)}
      onKeyDown={e => onInsert(e.keyCode)}
      {...rest}
    />
  );
};

export default InputText;
