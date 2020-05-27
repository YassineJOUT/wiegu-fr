import React, { useState, useEffect } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { history } from "./utilities/history";
import RegisterPage from "./pages/RegistrationPage";
import LoginChosePage from "./pages/LoginLink/ChosePage";
import LoginTextPage from "./pages/LoginLink/MessagePage";
import LoginEmailForm from "./pages/LoginLink/EmailPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./utilities/protectedRoute";

import { Context, loadState } from "./utilities/useAuth";
import LoginPage from "./pages/LoginPage";
import { userService } from "./services/users";

const loadedState = loadState();

const App: React.FC = () => {
  const [context, setContext] = useState<Context>(loadedState);

  useEffect(() => {
     userService
      .getStore()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  console.log(context);
  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: context.contextState.isLogged,
    authenticationPath: "/",
  };
  return (
    <div>
      <Context.Provider value={{ ...context, setContext }}>
        <Router history={history}>
          <Route
            path="/"
            exact
            component={() => (
              <Redirect
                to={context.contextState.isLogged ? "/profile" : "login"}
              />
            )}
          />
          <Route path="/login" exact component={LoginPage} />
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/login-link"
            component={LoginEmailForm}
          />
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/profile"
            component={ProfilePage}
          />
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/register"
            component={RegisterPage}
          />

          <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/login-link-text"
            component={LoginTextPage}
          />
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/"
            component={LoginChosePage}
          />
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
