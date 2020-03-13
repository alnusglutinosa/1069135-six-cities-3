import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer.js';

const Settings = {
  CITY: [52.38333, 4.9],
  ZOOM: 12,
};

const rootElement = document.getElementById(`root`);
const rentalCount = offerMocks.length;
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);



ReactDOM.render(
  <Provider store={store}>
      <App
        rentalCount={rentalCount}
        city={Settings.CITY}
        zoom={Settings.ZOOM}
        offers={offers}
      />
  </Provider>,rootElement);
