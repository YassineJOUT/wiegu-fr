import React, { useState } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { history } from "./utilities/history";
import RegisterPage from "./pages/RegistrationPage";
import LoginChosePage from "./pages/LoginLink/ChosePage";
import LoginTextPage from "./pages/LoginLink/MessagePage";
import LoginEmailPage from "./pages/LoginLink/EmailPage";
import ProfilePage from "./pages/ProfilePage";
import ProfilPage from "./pages/ProfilPage";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./utilities/protectedRoute";
import "./App.css";
import { Context, loadState } from "./utilities/useAuth";
import LoginPage from "./pages/LoginPage";
import MagicLinkPage from "./pages/MagicLinkPage";
import HomePage from "./pages/HomePage";

const loadedState = loadState();

const App: React.FC = () => {
  const [context, setContext] = useState<Context>(loadedState);

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
              <Redirect to={context.contextState.isLogged ? "/profile" : "/"} />
            )}
          />
          <Route path="/profil" exact component={ProfilPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/login-link" exact component={LoginEmailPage} />
          <Route path="/mlink/:token" exact component={MagicLinkPage} />

          {/* <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/login-link"
            component={LoginEmailForm}
          /> */}

          <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/profile"
            component={ProfilePage}
          />
          <Route path="/register" exact component={RegisterPage} />
          {/* <Route path="/" exact component={HomePage} /> */}
          {/* <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/register"
            component={RegisterPage}
          />   */}
          <Route
            path="/login-link-text/:email"
            exact
            component={LoginTextPage}
          />

          {/* <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/login-link-text"
            component={LoginTextPage}
          /> */}
          <Route path="/" exact component={HomePage} />

          {/* <ProtectedRoute
            {...defaultProtectedRouteProps}
            exact={true}
            path="/"
            component={LoginChosePage}
          /> */}
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
