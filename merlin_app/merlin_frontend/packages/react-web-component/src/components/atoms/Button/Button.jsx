// @flow

import React from "react";
import classnames from "classnames/bind";
import type { targetHandler } from "../../../types";

type ButtonProps = {
  onClick: targetHandler,
  className?: string
};

const Button = ({ onClick, ...rest }: ButtonProps) => {
  return <button onClick={onClick} {...rest} />;
};

export default Button;
