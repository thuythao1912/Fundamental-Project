import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../../Utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <h1></h1>
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    // <Route {...rest} render={props => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)} />
  );
};

export default PublicRoute;
