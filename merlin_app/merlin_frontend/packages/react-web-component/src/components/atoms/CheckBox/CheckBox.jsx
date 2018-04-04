// @flow

import React from "react";
import type { targetHandler } from "../../../types";

type CheckBoxProps = {
  id: string,
  isActive: boolean,
  name: string,
  className: string,
  onHandleChange: targetHandler
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
