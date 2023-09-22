import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import PopupWithForm from "./PopupWithForm";

import {
  getCurrentUser,
  getIsAvatarSending,
  getIsAvatarSendError,
} from "../store/current-user/selectors";
import { sendAvatar } from "../store/current-user/actions";

import useFormWithValidation from "../hooks/useFormWithValidation";

function EditAvatarPopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const isSending = useSelector(getIsAvatarSending);
  const sendingError = useSelector(getIsAvatarSendError);
  const {
    values,
    handleChange,
    resetFrom,
    errors,
    isValid,
  } = useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, false);
    }
  }, [currentUser, resetFrom]);

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(sendAvatar(values)).then(() => onClose());
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title='Обновить аватар'
      name='edit-avatar'
      buttonText={isSending ? "Сохранение..." : "Сохранить"}
      isDisabled={!isValid}
    >
      <label className='popup__label'>
        <input
          type='url'
          name='avatar'
          id='owner-avatar'
          className='popup__input popup__input_type_description'
          placeholder='Ссылка на изображение'
          value={values.avatar || ""}
          onChange={handleChange}
          required
        />
        <span className='popup__error' id='owner-avatar-error'>
          {errors.avatar || ""}
        </span>
      </label>
      {!!sendingError && (
        <span className='popup__send-error'>{`Ошибка: ${sendingError}`}</span>
      )}
    </PopupWithForm>
  );
}

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EditAvatarPopup;
