import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onMainButtonClick = () => {};

const App = (props) => {
  const {rentalCount, offers} = props;
  return <Main
    rentalCount={rentalCount}
    offers={offers}
    onMainButtonClick={onMainButtonClick}
  />;
};

App.propTypes = {
  rentalCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  onMainButtonClick: PropTypes.func
};

export default App;
