// @flow

import React from "react";

type Props = {
  onChange: Function
};

const CheckBox = (props: Props) => (
  <div>
    <input type="checkbox" onChange={props.onChange} />
  </div>
);

export default CheckBox;
