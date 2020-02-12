import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const Settings = {
  RENTAL_COUNT: 312
};

ReactDOM.render(
    <App
      rentalCount={Settings.RENTAL_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
