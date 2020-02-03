import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="title">Contact Information</h1>
      <h2>Email: leighd2008@gmail.com</h2>
      <h2>Phone: 330-307-7570</h2>
      <p className="copyright">
        <a
          href="https://leighd2008.github.io/My_Profile/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Copyright 2020, Diane Leigh{" "}
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
