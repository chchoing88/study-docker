import React, { Component } from "react";
import { PageTemplate, Header, Input } from "../../../components";

export default class Contact extends Component {
  render() {
    return (
      <PageTemplate header={<Header />}>
        <Input />
      </PageTemplate>
    );
  }
}
