import React from "react";

const InputText = ({ ...rest }) => {
  return (
    <div>
      <input type="text" placeholder="" {...rest} />
    </div>
  );
};

export default InputText;
