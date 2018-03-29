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
  onMouseOver: Function,
  onDelete: Function
};

const TodoItem = ({ todo, onChange, onMouseOver, onDelete }: Props) => {
  return (
    <li className={cx("todo_item")} onMouseOver={onMouseOver}>
      <CheckBox
        className={cx("inp_confirm")}
        id={todo.id}
        isActive={todo.isDone}
        onHandleChange={e => onChange(e, todo.id)}
      />
      <Label
        forValue={todo.id}
        className={cx({
          lab_todo: true,
          lab_done: todo.isDone
        })}
      >
        {todo.name}
      </Label>
      <Button className={cx("btn_del")} onClick={e => onDelete(todo.id)} />
    </li>
  );
};

export default TodoItem;
