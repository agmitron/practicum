import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import { checkAuth } from "../store/auth/actions";
import { getIsAuth } from "../store/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const [tooltipStatus, setTooltipStatus] = React.useState();
  const closeInfoTooltip = () => setTooltipStatus();
  const isLoggedIn = useSelector(getIsAuth);

  React.useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className='page__content'>
      <Header />
      <Switch>
        <ProtectedRoute path='/' exact>
          <Main />
        </ProtectedRoute>
        <Route path='/signup'>
          {isLoggedIn && <Redirect to='/' />}
          <Register setTooltip={setTooltipStatus} />
        </Route>
        <Route path='/signin'>
          {isLoggedIn && <Redirect to='/' />}
          <Login setTooltip={setTooltipStatus} />
        </Route>
        <Route path='*'>
          {isLoggedIn ? <Redirect to='/' /> : <Redirect to='/sign-in' />}
        </Route>
      </Switch>
      <Footer />
      <Route path='/(signup|signin)'>
        <InfoTooltip
          isOpen={!!tooltipStatus}
          onClose={closeInfoTooltip}
          status={tooltipStatus}
        />
      </Route>
    </div>
  );
}

export default App;
