import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place name link be pressed`, () => {
  const onMainButtonClick = jest.fn();

  const topPlacesName = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ];

  const main = shallow(
      <Main
        rentalCount={312}
        topPlacesName={topPlacesName}
        onMainButtonClick={onMainButtonClick}
      />
  );

  const titleLink = main.find(`.place-card__link`);
  titleLink.forEach((item) => item.simulate(`click`, {preventDefault() {}}));
  expect(onMainButtonClick.mock.calls.length).toBe(titleLink.length);
});
