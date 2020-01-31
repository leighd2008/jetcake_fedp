import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/image2vector.svg";

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/register">
        Register
      </Link>
      <Link className="option" to="/profile">
        Profile
      </Link>
    </div>
  </div>
);

export default Header;
