import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const emptyFunc = () => {};

const topPlacesName = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const rentalCount = 312;

it(`<Main /> should render topPlaces`, () => {
  const tree = renderer
    .create(<Main
      topPlacesName={topPlacesName}
      rentalCount={rentalCount}
      onMainButtonClick={emptyFunc}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
