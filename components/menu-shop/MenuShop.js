import React from "react";
import PropTypes from "prop-types";

function MenuShop() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            width="130px"
            src="/assets/img/logo-sntShop.png"
            alt="logo-shop-nst"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item nav-custom active">
              <a className="nav-link" href="#">
                TRANG CHỦ
              </a>
            </li>
            <li className="nav-item nav-custom">
              <a className="nav-link" href="#">
                THỜI TRANG NỮ
              </a>
            </li>
            <li className="nav-item nav-custom">
              <a className="nav-link" href="#">
                THỜI TRANG NAM
              </a>
            </li>
            <li className="nav-item nav-custom">
              <a className="nav-link" href="#">
                ĐỒ NGỦ
              </a>
            </li>
            <li className="nav-item nav-custom">
              <a className="nav-link" href="#">
                GIÀY DÉP & PHỤ KIỆN
              </a>
            </li>
            <li className="nav-item nav-custom">
              <a className="nav-link" href="#">
                VOUCHER SHOP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MenuShop;
