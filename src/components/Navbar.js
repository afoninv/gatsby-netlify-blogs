import React from "react";
import { Link } from "gatsby";
import Logo_Soveren from "../img/Logo_Soveren.svg";
import ArrowRightBold_outlined from "../img/Arrow-Right-bold_outlined.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <div
        data-animation="over-right"
        className="navbar w-nav"
        data-easing2="ease-out-quad"
        data-easing="ease-out-quad"
        data-collapse="small"
        role="banner"
        data-no-scroll="{1}"
        data-duration="{400}"
        data-doc-height="{1}"
      >
        <div className="navigation-items wrapper-main">
          <div id="w-node-e92c939ac5fc-1b74456c" className="nav-left">
            <Link
              to="/"
              aria-current="page"
              className="logo-block w-nav-brand w--current"
            >
              <img
                src={Logo_Soveren}
                alt="Soveren logo"
                className="logo"
                srcSet
              />
            </Link>
          </div>
          <div id="w-node-2b83cd00e13c-1b74456c" className="nav-right">
            <div className="transparant-menu-button w-nav-button">
              <div className="menu-icon-line-top" />
              <div className="menu-icon-line-middle" />
              <div className="menu-icon-line-bottom" />
            </div>
          </div>
          <nav
            role="navigation"
            id="w-node-f923089a7d17-1b74456c"
            className="nav-menu w-nav-menu"
          >
            <Link
              id="seo-company-button-header"
              to="/company"
              className="button-tertiary w-button"
            >
              Company
            </Link>
            <Link
              id="seo-pricing-button-header"
              to="/pricing"
              className="button-tertiary last w-button"
            >
              Pricing
            </Link>
            <Link
              id="seo-get-in-touch-button-header"
              to="/get-in-touch"
              className="button-secondary w-button"
            >
              Get in touch
            </Link>
            <Link
              id="seo-try-for-free-button-header"
              to="/sign-up"
              className="button-primary w-inline-block"
            >
              <div className="button-text">Try for free</div>
              <img
                src={ArrowRightBold_outlined}
                loading="lazy"
                alt
                className="icon-button"
                srcSet
              />
            </Link>
            <div className="footer-mobile">
              <div className="link-wrapper-menu">
                <a
                  href="../documents/Soveren_Privacy_Policy_20102020.pdf"
                  target="_blank"
                  className="link-button secondary"
                >
                  Privacy Policy
                </a>
                <a
                  href="../documents/Soveren_Website_Terms_of_Use_20102020.pdf"
                  target="_blank"
                  className="link-button secondary"
                >
                  Terms of use
                </a>
              </div>

              <div className="copyright">© Copyright 2020 — Soveren, Inc.</div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
};

export default Navbar;
