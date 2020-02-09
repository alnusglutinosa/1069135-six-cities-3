import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {rentalCount, topPlacesName} = props;
  return <Main
    rentalCount={rentalCount}
    topPlacesName={topPlacesName}
  />;
};

App.propTypes = {
  rentalCount: PropTypes.number.isRequired,
  topPlacesName: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
