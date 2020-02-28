
import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const mock = {
  place: {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    mark: `Premium`,
    imgSrc: `img/apartment-01.jpg`,
    price: 120,
    priceText: `night`,
    rating: 93,
    coordinates: [52.3909553943508, 4.85309666406198]
  }
};

it(`Place-card correctly renders`, () => {
  const {place} = mock;
  const tree = renderer
    .create(<PlaceCard
      cardInfo={place}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
