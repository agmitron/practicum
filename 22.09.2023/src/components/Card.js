import React from "react";
import PropTypes from "prop-types";
import { cardPropTypes } from "../utils/prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "../store/current-user/selectors";
import { changeLikeCardStatus } from "../store/cards/actions";

function Card({ card, onImageClick, onDelete }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  function handleImageClick() {
    onImageClick(card);
  }

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_is-active"
  }`;

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  function handleLikeClick() {
    dispatch(changeLikeCardStatus(card._id, !isLiked));
  }

  function handleDeleteClick() {
    onDelete(card);
  }

  return (
    <li className='places__item card'>
      <div
        className='card__image'
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleImageClick}
      ></div>
      <button
        type='button'
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className='card__description'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__likes'>
          <button
            type='button'
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className='card__like-count'>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  card: cardPropTypes,
  onImageClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
