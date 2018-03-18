import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { PageTemplate, Header, TodoList } from "components";

const KEY_ENTER = 13;

export default class TodoPage extends Component {
  constructor(...args) {
    super(...args);
    
    this.state = {
      keyword: '',
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
  }

  handleInsert(e){
    if(e.keyCode !== KEY_ENTER){
      return false;
    }

    this.setState({
      todoLists: [
        ...this.state.todoLists,
        {
          id: uuidv1(),
          name: this.state.keyword,
          isDone: false
        }
      ]
    }, () => {
      this.setState({
        keyword: ''
      })
    });
    
  }

  handleChange(e){
    console.log("change Input")
    this.setState({
      keyword: e.target.value
    })
  }

  chage

  render() {
    return (
      <PageTemplate header={<Header 
        value={this.state.keyword} 
        onChange={this.handleChange}
        onKeyDown={this.handleInsert}
      />}>
        <TodoList todoLists={this.state.todoLists} />
      </PageTemplate>
    );
  }
}
