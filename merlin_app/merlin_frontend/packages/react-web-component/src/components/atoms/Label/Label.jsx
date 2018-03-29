// @flow

import React from "react";

type Props = {
  forValue: String,
  className: String,
  children: any
};

const Label = ({ forValue, className, children }: Props) => {
  return (
    <label for={forValue} className={className}>
      {children}
    </label>
  );
};

export default Label;
