import React from "react";
import PropTypes from "prop-types";

const PlaceCard = (props) => {
  const {cardInfo, onClick, _updateData} = props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        _updateData(cardInfo.id);
      }}
      onMouseOut={() => {
        _updateData();
      }}
      onClick={onClick}
    >

      {cardInfo.mark && (
        <div className="place-card__mark">
          <span>{cardInfo.mark}</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={cardInfo.imgSrc}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardInfo.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${cardInfo.rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onClick}>
            {cardInfo.title}
          </a>
        </h2>
        <p className="place-card__type">{cardInfo.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  cardInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
  onClick: PropTypes.func,
  _updateData: PropTypes.func
};

export default PlaceCard;
