
import React from "react";
import renderer from "react-test-renderer";
import Property from "./property";

it(`Property correctly renders`, () => {
  const tree = renderer
    .create(<Property />).toJSON();
  expect(tree).toMatchSnapshot();
});
