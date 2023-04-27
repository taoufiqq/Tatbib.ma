import React, { element } from "react";
import { Route, Link } from "react-router-dom";
import { isAuthenticated } from "./helpsSecretary";

const PrivateRoute = ({ element: element, ...rest }) => (
    <>
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <element {...props} />
            ) : (
                <Link
                    to={{
                        pathname: "/loginSecretary"
                    }}
                />
            )
        }
    /></>
);

export default PrivateRoute;