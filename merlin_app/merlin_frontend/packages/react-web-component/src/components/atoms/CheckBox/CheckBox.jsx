// @flow

import React from "react";

type Props = {
  isDone: Boolean,
  onChange: Function
};

const CheckBox = (props: Props) => (
  <div>
    <input
      className={props.isDone ? "isDone" : "noDone"}
      type="checkbox"
      onChange={props.onChange}
    />
  </div>
);

export default CheckBox;
