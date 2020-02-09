import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onMainButtonClick = () => {};

const App = (props) => {
  const {rentalCount, topPlacesName} = props;
  return <Main
    rentalCount={rentalCount}
    topPlacesName={topPlacesName}
    onMainButtonClick={onMainButtonClick}
  />;
};

App.propTypes = {
  rentalCount: PropTypes.number.isRequired,
  topPlacesName: PropTypes.arrayOf(PropTypes.string.isRequired),
  onMainButtonClick: PropTypes.func
};

export default App;
