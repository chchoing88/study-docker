import React from "react";
import classnames from "classnames/bind";

const Button = ({ onClick, ...rest }) => {
  return <button onClick={onClick} {...rest} />;
};

export default Button;
