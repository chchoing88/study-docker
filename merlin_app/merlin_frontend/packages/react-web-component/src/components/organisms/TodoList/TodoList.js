import React from "react";



const TodoList = ({todoLists}) => {
  const list = todoLists;
  const todoItems = list.map(todo => <li key={todo.id}>{todo.name}</li>);
  
  return (
    <ul>
      {todoItems}
    </ul>
  )
};

export default TodoList;
