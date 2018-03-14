import React, { Component } from "react";
import { ContactPage } from "../components";
import { BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={ContactPage} />
    </div>
  );
};

// develop hot module
export default hot(module)(App);
