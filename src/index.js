import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTAL_COUNT: 312
};

ReactDOM.render(
    <App
      rentalCount={Settings.RENTAL_COUNT}
    />,
    document.querySelector(`#root`)
);
