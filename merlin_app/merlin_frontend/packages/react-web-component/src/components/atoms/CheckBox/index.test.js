import React from "react";
import { shallow } from "enzyme";
import CheckBox from "./CheckBox";

describe("A suite", function() {
  it("should be selectable by class 'foo'", function() {
    const wrapper = shallow(<CheckBox />);
    // expect(wrapper.hasClass("isDone")).toBe(true);
    expect(wrapper.hasClass("test")).toBeTruthy();
  });
});
