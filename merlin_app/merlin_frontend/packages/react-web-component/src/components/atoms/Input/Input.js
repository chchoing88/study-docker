import React from "react";

const Input = ({ ...rest }) => {
  return (
    <div>
      <input {...rest} />
    </div>
  );
};

export default Input;
