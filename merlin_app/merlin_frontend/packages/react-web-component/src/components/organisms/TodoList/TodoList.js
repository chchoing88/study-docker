import React from "react";

const TodoList = props => {
  const todoLists = props.todoLists;

  const todoItems = todoLists.map(todo => <li>{todo.name}</li>);

  return <ul>{todoItems}</ul>;
};

export default TodoList;
