import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Preloader from './Preloader';
import { useSelector } from "react-redux";

import { getIsAuth, getIsAuthChecking } from "../store/auth/selectors";


const ProtectedRoute = ({path, children}) => {
  const isLoggedIn = useSelector(getIsAuth);
  const isChecking = useSelector(getIsAuthChecking);

  return (
    <Route path={path} exact>
      { isChecking ? (
        <main className='content'>
          <Preloader />
        </main>
      ) : (
        isLoggedIn ? children : <Redirect to="/signin" />
      )}
    </Route>
)}

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default ProtectedRoute;