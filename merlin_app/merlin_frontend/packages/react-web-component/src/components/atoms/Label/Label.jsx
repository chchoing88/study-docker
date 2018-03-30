// @flow

import * as React from "react";

type Props = {
  forValue: String,
  className: String,
  children?: React.Node
};

const Label = ({ forValue, className, children }: Props) => {
  return (
    <label htmlFor={forValue} className={className}>
      {children}
    </label>
  );
};

export default Label;
