import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const onMainButtonClick = () => {};
    const {rentalCount, offers} = this.props;

    if (offers) {
      return (
        <Main
          rentalCount={rentalCount}
          offers={offers}
          onMainButtonClick={onMainButtonClick}
        />
      );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <Property />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  rentalCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  onMainButtonClick: PropTypes.func
};

export default App;
