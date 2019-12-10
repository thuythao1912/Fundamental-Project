import React from "react";
import { fakeAuth } from "../../Context/auth";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const AuthHeader = withRouter(({ history }) =>
  fakeAuth.isAuthenticated === true ? (
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
            <NavLink
              className="nav-link"
              to="/"
              exact
              activeStyle={{ fontWeight: "bold" }}
            >
              Tin tức <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle "
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to="/danhsach"
              activeStyle={{ fontWeight: "bold" }}
            >
              Danh sách
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/danhsach/sinhvien">
                Sinh viên
              </NavLink>
              <NavLink className="dropdown-item" to="/danhsach/monhoc">
                Môn học
              </NavLink>
              <NavLink className="dropdown-item" to="/danhsach/admin">
                Admin
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to="/hocphan"
              activeStyle={{ fontWeight: "bold" }}
            >
              Học phần
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/hocphan/danhsach">
                Danh sách lớp học phần
              </NavLink>
              {/* <NavLink className="dropdown-item" to="/hocphan/ketqua">
                Kết quả đăng ký học phần
              </NavLink> */}
            </div>
          </li>
        </ul>

        <div className="text-white">
          Xin chào admin
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="ml-3"
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
              fakeAuth.setLocalStorage_IsAuthenticated(false);
            }}
          />
        </div>
      </div>
    </nav>
  ) : (
    ""
  )
);

export default AuthHeader;
