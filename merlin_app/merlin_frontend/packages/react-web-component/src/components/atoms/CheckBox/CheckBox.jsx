// @flow

import React from "react";

type Props = {
  isActive: Boolean,
  onChange: Function
};

const CheckBox = (props: Props) => (
  <div>
    <input
      // className={props.isActive ? "isDone" : "noDone"}
      // className="isDone"
      type="checkbox"
      onChange={props.onChange}
    />
  </div>
);

export default CheckBox;
