import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { getIsCardSending, getCardSendError } from "../store/cards/selectors";
import { addCard } from "../store/cards/actions";
import PopupWithForm from "./PopupWithForm";
import useFormWithValidation from "../hooks/useFormWithValidation";

function AddPlacePopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const isSending = useSelector(getIsCardSending);
  const sendingError = useSelector(getCardSendError);
  const {
    values,
    handleChange,
    resetFrom,
    errors,
    isValid,
  } = useFormWithValidation();

  useEffect(() => {
    resetFrom();
  }, [isOpen, resetFrom]);

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addCard(values)).then(() => onClose());
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title='Новое место'
      name='new-card'
      buttonText={isSending ? "Сохранение..." : "Сохранить"}
      isDisabled={!isValid || isSending}
    >
      <label className='popup__label'>
        <input
          type='text'
          name='name'
          id='place-name'
          className='popup__input popup__input_type_card-name'
          placeholder='Название'
          required
          minLength='1'
          maxLength='30'
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className='popup__error' id='place-name-error'>
          {errors.name || ""}
        </span>
      </label>
      <label className='popup__label'>
        <input
          type='url'
          name='link'
          id='place-link'
          className='popup__input popup__input_type_url'
          placeholder='Ссылка на картинку'
          required
          value={values.link || ""}
          onChange={handleChange}
        />
        <span className='popup__error' id='place-link-error'>
          {errors.link || ""}
        </span>
      </label>
      {!!sendingError && (
        <span className='popup__send-error'>{`Ошибка: ${sendingError}`}</span>
      )}
    </PopupWithForm>
  );
}

AddPlacePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default AddPlacePopup;
