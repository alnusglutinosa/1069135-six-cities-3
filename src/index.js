import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const Settings = {
  RENTAL_COUNT: 312,
  CITY: [52.38333, 4.9],
  ZOOM: 12,
};

ReactDOM.render(
    <App
      rentalCount={Settings.RENTAL_COUNT}
      city={Settings.CITY}
      zoom={Settings.ZOOM}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
