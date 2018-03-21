import React from "react";
import { Input, Label, TodoItem } from "components";
import classNames from "classnames/bind";
import style from "./TodoList.scss";

const cx = classNames.bind(style);

const TodoList = ({ todoLists, onChange, onMouseOver }) => {
  const list = todoLists;
  const todoItems = list.map(todo => (
    <TodoItem key={todo.id} todo={todo} onChange={onChange} />
  ));

  return <ul className={cx("list_todo")}>{todoItems}</ul>;
};

export default TodoList;
