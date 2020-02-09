import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTAL_COUNT: 312,
  TOP_PLACES_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ]
};

ReactDOM.render(
    <App
      rentalCount={Settings.RENTAL_COUNT}
      topPlacesName={ Settings.TOP_PLACES_NAME}
    />,
    document.querySelector(`#root`)
);
