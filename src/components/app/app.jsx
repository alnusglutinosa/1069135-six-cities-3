import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {rentalCount} = props;
  return <Main
    rentalCount={rentalCount}
  />;
};

App.propTypes = {
  rentalCount: PropTypes.number.isRequired
};

export default App;
