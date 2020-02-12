import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should place name link be pressed`, () => {
  const onMainButtonClick = jest.fn();
  const offers = [
    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      mark: `Premium`,
      imgSrc: `img/apartment-01.jpg`,
      price: 120,
      priceText: `night`,
      rating: 93
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `Private room`,
      mark: ``,
      imgSrc: `img/room.jpg`,
      price: 80,
      priceText: `night`,
      rating: 80
    },
  ];

  const main = shallow(
      <Main
        rentalCount={312}
        offers={offers}
        onMainButtonClick={onMainButtonClick}
      />
  );

  const titleLink = main.find(`.place-card__link`);
  titleLink.forEach((item) => item.simulate(`click`, {preventDefault() {}}));
  expect(onMainButtonClick.mock.calls.length).toBe(titleLink.length);
});
