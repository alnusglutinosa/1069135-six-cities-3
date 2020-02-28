import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list";

const mock = {
  offers: [
    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      mark: `Premium`,
      imgSrc: `img/apartment-01.jpg`,
      price: 120,
      priceText: `night`,
      rating: 93,
      coordinates: [52.3909553943508, 4.85309666406198]
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `Private room`,
      mark: ``,
      imgSrc: `img/room.jpg`,
      price: 80,
      priceText: `night`,
      rating: 80,
      coordinates: [52.3909553943508, 4.85309666406198]
    },
  ]
};

it(`Place-list correctly renders`, () => {
  const {offers} = mock;
  const tree = renderer
    .create(<PlaceList
      offers={offers}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
