import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  _initMap() {
    const {offers, city, zoom} = this.props;

    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution:
              `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(this.map);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    for (let i = 0; i < offers.length; i++) {
      leaflet
        .marker(offers[i].coordinates, {icon})
        .addTo(this.map)
        .bindPopup(offers[i].title);
    }
  }

  componentDidMount() {
    try {
      this._initMap();
    } catch (ex) {
      // continue regardless of error
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <section className="cities__map map" id="map" />;
  }
}

Map.propTypes = {
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
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ),
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired
};

export default Map;
