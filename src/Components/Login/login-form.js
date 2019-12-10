import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import api from "../../axios";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../../Context/auth";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", redirectToReferrer: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  //onChangeUsername
  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  //onChangePassword
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  //Submit
  onSubmit() {
    // var re = false;
    const obj = {
      username: this.state.username,
      password: this.state.password
    };
    api.post("/admin/login", obj).then(res => {
      // console.log(res);
      if (res.data === "admin not found") {
        alert("Tên đăng nhập hoặc mật khẩu sai!");
        this.setState({ username: "", password: "" });
      } else {
        alert("Đăng nhập thành công!");
        fakeAuth.setLocalStorage_IsAuthenticated(true);
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }));
        });
      }
    });
  }

  render() {
    const { redirectToReferrer } = this.state;
    // const { from } = this.props.location.state || { from: { pathname: "/" } };
    // console.log(redirectToReferrer);
    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }

    return (
      <form>
        <div className="my-3">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon={faUserAlt} />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              id="txtUsername"
              placeholder="Tên đăng nhập..."
              value={this.state.username}
              onChange={this.onChangeUsername}
              required
            />
          </div>
        </div>
        <div className="my-3">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <input
              type="password"
              className="form-control"
              id="txtPasssword"
              placeholder="Mật khẩu...."
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div>
        </div>
        <input type="button" value="Đăng nhập" className="btn btn-block btn-info" onClick={this.onSubmit} />
      </form>
    );
  }
}

export default LoginForm;
