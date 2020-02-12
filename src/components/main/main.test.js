import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`<Main /> should render offers`, () => {

  const emptyFunc = () => {};
  const rentalCount = 312;
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

  const tree = renderer
    .create(<Main
      offers={offers}
      rentalCount={rentalCount}
      onMainButtonClick={emptyFunc}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
