import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { PageTemplate, Header, TodoList } from "components";

const KEY_ENTER = 13;

export default class TodoPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      keyword: "",
      todoLists: [
        {
          id: uuidv1(),
          name: "abcd",
          isDone: false
        }
      ]
    };

    this.handleInsert = this.handleInsert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  // 할일 삽입
  handleInsert(keycode) {
    if (keycode !== KEY_ENTER) {
      return false;
    }

    this.setState(
      {
        todoLists: [
          ...this.state.todoLists,
          {
            id: uuidv1(),
            name: this.state.keyword,
            isDone: false
          }
        ]
      },
      () => {
        this.setState({
          keyword: ""
        });
      }
    );
  }

  handleChange(value) {
    console.log("change Input");
    this.setState({
      keyword: value
    });
  }
  // 할일 끝냄
  handleCheck(e, id) {
    console.log("check");
    // 찾아서 update..
    const newTodoList = this.state.todoLists.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    this.setState({
      todoLists: newTodoList
    });
  }

  handleDelete(id) {
    console.log("delete");
    // 찾아서 delete

    const newTodoList = this.state.todoLists.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todoLists: newTodoList
    });
  }

  render() {
    return (
      <PageTemplate
        header={
          <Header
            value={this.state.keyword}
            onChange={this.handleChange}
            onInsert={this.handleInsert}
          />
        }
      >
        <TodoList
          todoLists={this.state.todoLists}
          onChange={this.handleCheck}
          onMouseOver={this.handleHover}
          onDelete={this.handleDelete}
        />
      </PageTemplate>
    );
  }
}
