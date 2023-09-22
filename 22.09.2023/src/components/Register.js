import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from "../store/auth/actions";
import { getRegisterSending } from "../store/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import useForm from "../hooks/useForm";

function Register({ setTooltip }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isSenging } = useSelector(getRegisterSending);
  const { values, handleChange } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(register(values))
      .then(() => {
        history.push("/signin");
        setTooltip({
          text: "Вы успешно зарегистрировались",
          iconType: "success",
        });
      })
      .catch((err) => {
        console.log(err)
        setTooltip({
          text: "Что-то пошло не так!  Попробуйте ещё раз.",
          iconType: "error",
        });
      });
  }

  return (
    <div className='auth-form'>
      <form className='auth-form__form' onSubmit={handleSubmit}>
        <div className='auth-form__wrapper'>
          <h3 className='auth-form__title'>Регистрация</h3>
          <label className='auth-form__input'>
            <input
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
        <div className='auth-form__wrapper'>
          <button
            className='auth-form__button'
            type='submit'
            disabled={isSenging}
          >
            {isSenging ? "Регистрация..." : "Зарегистрироваться"}
          </button>
          <p className='auth-form__text'>
            Уже зарегистрированы?{" "}
            <Link className='auth-form__link' to='/signin'>
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

Register.propTypes = {
  setTooltip: PropTypes.func.isRequired
}

export default Register;
