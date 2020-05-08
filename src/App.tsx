import React from 'react';
import { Router } from "react-router-dom";
import { history } from "./utilities/history";
import RegisterPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import LoginChosePage from "./pages/LoginLink/ChosePage";
import LoginTextPage from "./pages/LoginLink/MessagePage";
import LoginEmailForm from "./pages/LoginLink/EmailPage";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./utilities/protectedRoute";
function App() {
  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: true,
    authenticationPath: "/",
  };
  return (
    <div>
      <Router history={history}>
      {/* <Route
              path="/"
              exact
              component={() => (
                <Redirect
                  to={"login"}
                />
              )}
            /> */}
      <ProtectedRoute
              {...defaultProtectedRouteProps}
              exact={true}
              path="/login-link"
              component={LoginEmailForm}
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
              path="/login"
              component={LoginPage}
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
    </div>
  );
}

export default App;
