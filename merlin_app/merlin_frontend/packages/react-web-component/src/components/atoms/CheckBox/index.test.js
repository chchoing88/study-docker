import React from "react";
import { shallow } from "enzyme";
import CheckBox from "./CheckBox";

describe("A suite", function() {
  it("should be selectable by class 'foo'", function() {
    expect(shallow(<CheckBox />).is(".foo")).toBe(false);
  });
});
