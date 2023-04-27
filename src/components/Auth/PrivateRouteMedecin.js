import React, { element } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helpsMedecin";

const PrivateRoute = ({ element: element, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <element {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/loginMedcine"
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;