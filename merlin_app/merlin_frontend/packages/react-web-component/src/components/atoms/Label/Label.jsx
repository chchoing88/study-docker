// @flow

import * as React from "react";

type LabelProps = {
  forValue: String,
  className: String,
  children?: React.Node
};

const Label = ({ forValue, className, children }: LabelProps) => {
  return (
    <label htmlFor={forValue} className={className}>
      {children}
    </label>
  );
};

export default Label;


