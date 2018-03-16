import React, { Component } from "react";
import { PageTemplate, Header, TodoList } from "../../../components";

export default class TodoPage extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      todoLists: [
        {
          name: "abcd",
          isDone: false
        }
      ]
    };
  }

  render() {
    return (
      <PageTemplate header={<Header />}>
        <TodoList todoLists={this.state.todoLists} />
      </PageTemplate>
    );
  }
}
