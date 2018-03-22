// @flow

import React from "react";
import { CheckBox, Label, Button } from "components";
import classnames from "classnames/bind";
import style from "./TodoItem.scss";

const cx = classnames.bind(style);

type Todo = {
  id: string,
  name: string,
  isDone: Boolean
};

type Props = {
  todo: Todo,
  onChange: Function,
  onMouseOver: Function
};

const TodoItem = ({ todo, onChange, onMouseOver }: Props) => {
  return (
    <li className={cx("todo_item")} onMouseOver={onMouseOver}>
      <CheckBox isActive={todo.isDone} onChange={e => onChange(e, todo.id)} />
      <Label>{todo.name}</Label>
      <Button className={cx("btn_del")} />
    </li>
  );
};

export default TodoItem;
