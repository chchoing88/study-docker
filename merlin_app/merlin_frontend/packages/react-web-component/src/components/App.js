import React, { Component } from "react";
import { TodoPage } from "../components";
import { BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={TodoPage} />
    </div>
  );
};

// develop hot module
export default hot(module)(App);
