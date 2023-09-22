import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentUser,
  getIsInfoSending,
  getIsInfoSendError,
} from "../store/current-user/selectors";
import { sendInfo } from "../store/current-user/actions";

import PopupWithForm from "./PopupWithForm";
import useFormWithValidation from "../hooks/useFormWithValidation";

function EditProfilePopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const isSending = useSelector(getIsInfoSending);
  const sendingError = useSelector(getIsInfoSendError);
  const {
    values,
    handleChange,
    resetFrom,
    errors,
    isValid,
  } = useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, true);
    }
  }, [currentUser, resetFrom]);

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(sendInfo(values)).then(() => onClose());
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title='Редактировать профиль'
      name='edit'
      buttonText={isSending ? "Сохранение..." : "Сохранить"}
      isDisabled={!isValid || isSending}
    >
      <label className='popup__label'>
        <input
          type='text'
          name='name'
          id='owner-name'
          className='popup__input popup__input_type_name'
          placeholder='Имя'
          required
          minLength='2'
          maxLength='40'
          pattern='[a-zA-Zа-яА-Я -]{1,}'
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className='popup__error' id='owner-name-error'>
          {errors.name || ""}
        </span>
      </label>
      <label className='popup__label'>
        <input
          type='text'
          name='about'
          id='owner-description'
          className='popup__input popup__input_type_description'
          placeholder='Занятие'
          required
          minLength='2'
          maxLength='200'
          value={values.about || ""}
          onChange={handleChange}
        />
        <span className='popup__error' id='owner-description-error'>
          {errors.about || ""}
        </span>
      </label>
      {!!sendingError && (
        <span className='popup__send-error'>{`Ошибка: ${sendingError}`}</span>
      )}
    </PopupWithForm>
  );
}

EditProfilePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};


export default EditProfilePopup;
