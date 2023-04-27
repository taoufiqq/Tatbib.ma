import React, { element } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helpsPatient";

const PrivateRoute = ({ element: element, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <element {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/loginPatient"
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;