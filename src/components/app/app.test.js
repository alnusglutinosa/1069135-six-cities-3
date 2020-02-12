import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`App correctly renders`, () => {
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

  const tree = renderer.create(<App rentalCount={312} offers={offers} />).toJSON();
  expect(tree).toMatchSnapshot();
});
