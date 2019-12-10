import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { fakeAuth } from "../../Context/auth";
class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" exact activeStyle={{ fontWeight: "bold" }}>
                Đăng nhập<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeStyle={{ fontWeight: "bold" }}>
                Trang chủ <span className="sr-only">(current)</span>
              </NavLink>
            </li> */}
            
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="/"
              >
                Danh sách
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/danhsach/sinhvien">
                  Sinh viên
                </NavLink>

                <NavLink className="dropdown-item" to="/monhoc">
                  Môn học
                </NavLink>
              </div>
            </li>
          </ul>

          <div className="text-white">
            Xin chào admin
            <Link to="/">
              <FontAwesomeIcon icon={faSignOutAlt} className="ml-3" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
