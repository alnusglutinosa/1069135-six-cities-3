import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      idActivePlace: 0
    };
    this._updateData = this._updateData.bind(this);
  }

  _updateData(value = 0) {
    this.setState({
      idActivePlace: value
    });
  }

  render() {
    const {offers, onClick} = this.props;

    return (
      <React.Fragment>
        {offers.map((item) => (
          <PlaceCard
            _updateData={this._updateData}
            cardInfo={item}
            onClick={onClick}
            key={item.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string,
        imgSrc: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ).isRequired,

  onClick: PropTypes.func
};

export default PlaceList;
