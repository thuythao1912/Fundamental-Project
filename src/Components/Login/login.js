import React from "react";
import LoginForm from "./login-form";
import { fakeAuth } from "../../Context/auth";
import { withRouter, Redirect } from "react-router-dom";

const Login = withRouter(({ history }) =>
  fakeAuth.isAuthenticated === false ? (
    <div className="col-lg-4 offset-lg-4 bg-white p-5 mt-5" style={{ boxShadow: "8px 8px 3px #ececec" }}>
      <header className=" d-flex justify-content-center" style={{ height: "150px" }}>
        <div style={{ margin: "auto" }}>
          <h3 className="text-center">
            <strong>ĐĂNG NHẬP</strong>
          </h3>
        </div>
        <div style={{ margin: "auto" }}>
          <img src="https://image.flaticon.com/icons/png/512/149/149071.png" width="100px" alt="icon" />
        </div>
      </header>
      <div>
        <LoginForm />
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  )
);

export default Login;
