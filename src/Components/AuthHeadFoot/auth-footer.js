import React from "react";
import { fakeAuth } from "../../Context/auth";
import { withRouter } from "react-router-dom";
import Footer from "../Footer/footer";

const AuthFooter = withRouter(({ history }) => (fakeAuth.isAuthenticated === true ? <Footer /> : ""));

export default AuthFooter;
