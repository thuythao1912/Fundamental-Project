import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../../Context/auth";

// console.log(`:${fakeAuth.isAuthenticated} `);

fakeAuth.getLocalStorage_IsAuthenticated();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
