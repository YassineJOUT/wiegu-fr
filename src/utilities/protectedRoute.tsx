import * as React from 'react';
import {Redirect, Route, RouteProps} from 'react-router';

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    authenticationPath: string;
}

 class ProtectedRoute extends Route<ProtectedRouteProps> {
     
     render = () => {
        let redirectPath: string = '';
        if (!this.props.isAuthenticated) {
            redirectPath = this.props.authenticationPath;
        }

        if (redirectPath) {
            return <Route {...this.props} component={() => (<Redirect to={{pathname: redirectPath}}/>)}  render={undefined}/>;
        } else {
            return <Route {...this.props}/>;
        }
    }
}

export default ProtectedRoute;