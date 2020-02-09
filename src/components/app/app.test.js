import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const topPlacesName = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const rentalCount = 312;

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentalCount={rentalCount}
      topPlacesName={topPlacesName}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
