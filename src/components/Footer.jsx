import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"> О компании </p>
        <p className="footer-subscription-heading">
          Moon Book International SA — производитель электронных устройств для
          чтения (ридеров), основанных на технологии E-Ink (электронные
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Компания</h2>
            <Link to="/admin-panel-add">Add page</Link>
            <Link to="/admin-panel">Admin Page</Link>
            <Link to="/">О нас</Link>
            <Link to="/">Контакты</Link>
            <Link to="/">Bug Bounty</Link>
          </div>
          <div className="footer-link-items">
            <h2>Покупателям</h2>
            <Link to="/">Как сделать заказ</Link>
            <Link to="/">Способы оплаты</Link>
            <Link to="/">Доставка</Link>
            <Link to="/">Правила продажи</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Контакты</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
            <Link to="/" className="social-logo">
              MOON BOOK
              <i className="fab fa-typo3" />
            </Link>
          </div> */}
          <small className="website-rights">homy vibe © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
