import React from "react";
import style from "./Header.scss";
import classNames from "classnames/bind";
import { Input } from "components";
const cx = classNames.bind(style);

const Header = ({ value, onChange, onKeyDown }) => {
  return (
    <header className={cx("header")}>
      <h1>
        <span>Merlin's todos </span>
      </h1>

      <Input
        value={value}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
