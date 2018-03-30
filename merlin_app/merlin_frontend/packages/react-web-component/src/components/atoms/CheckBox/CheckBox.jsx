// @flow

import React from "react";

type CheckBoxProps = {
  id: String,
  isActive: Boolean,
  name: String,
  className: String,
  onHandleChange: (e: SyntheticEvent<HTMLInputElement>) => mixed
};

const CheckBox = (props: CheckBoxProps) => (
  <input
    id={props.id}
    className={props.className}
    type="checkbox"
    name={props.name}
    onChange={props.onHandleChange}
  />
);

export default CheckBox;
