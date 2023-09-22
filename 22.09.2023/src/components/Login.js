import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { login } from "../store/auth/actions";
import { getLoginSending } from "../store/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import useForm from "../hooks/useForm";

function Login({ setTooltip }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isSenging } = useSelector(getLoginSending);
  const { values, handleChange } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(login(values))
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setTooltip({
          text: "Что-то пошло не так! Попробуйте ещё раз.",
          iconType: "error",
        });
      });
  }

  return (
    <div className='auth-form'>
      <form className='auth-form__form' onSubmit={handleSubmit}>
        <div className='auth-form__wrapper'>
          <h3 className='auth-form__title'>Вход</h3>
          <label className='auth-form__input'>
            <input
              data-testid='email_input'
              type='email'
              name='email'
              id='email'
              className='auth-form__textfield'
              placeholder='Email'
              value={values.email || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label className='auth-form__input'>
            <input
              data-testid='password_input'
              type='password'
              name='password'
              id='password'
              className='auth-form__textfield'
              placeholder='Пароль'
              value={values.password || ''}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button
          className='auth-form__button'
          type='submit'
          disabled={isSenging}
        >
          {isSenging ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setTooltip: PropTypes.func.isRequired
}

export default Login;
