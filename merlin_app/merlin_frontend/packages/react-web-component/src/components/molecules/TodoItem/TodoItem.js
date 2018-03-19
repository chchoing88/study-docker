import React from "react";
import { Input, Label, Button } from "components";
import classnames from "classnames/bind";
import style from "./TodoItem.scss";

const cx = classnames.bind(style);

const TodoItem = ({ todo, onChange, onMouseOver }) => {
  return (
    <li className={cx("todo_item")} onMouseOver={onMouseOver}>
      <Input type="checkbox" onChange={e => onChange(e, todo.id)} />
      <Label>{todo.name}</Label>
      <Button className={cx("btn_del")} />
    </li>
  );
};

export default TodoItem;
