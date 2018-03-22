// @flow

import React from "react";
import style from "./Header.scss";
import classNames from "classnames/bind";
import { InputText } from "components";
const cx = classNames.bind(style);

type Props = {
  value: string,
  onChange: Function,
  onKeyDown: number
};

const Header = ({ value, onChange, onKeyDown }: Props) => {
  return (
    <header className={cx("header")}>
      <h1>
        <span>Merlin's todos </span>
      </h1>

      <InputText
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
