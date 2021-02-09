import React from "react";
import { Link } from "gatsby";

import Logo_Soveren from "../img/Logo_Soveren.svg";
import TermsOfUse from "../documents/Soveren_Website_Terms_of_Use_20102020.pdf";

const Footer = class extends React.Component {
  render() {
    return (
      <div id="seo-contact-us-button-footer" className="footer-main">
        <div className="footer-left">
          <img
            src={Logo_Soveren}
            loading="lazy"
            alt="Soveren logo"
            className="logo"
            srcSet
          />
          <div className="body medium-s">Automating data privacy requests</div>
          <div className="body medium-s gray">
            Self-setup in minutes. Reduce compliance costs. Respond in full, in
            time.
          </div>

          <Link
            id="seo-get-in-touch-button-footer"
            to="/get-in-touch"
            className="button-secondary w-button"
          >
            Get in touch
          </Link>
        </div>
        <div className="footer-right">
          <div className="product-column-footer">
            <div className="footer-column-name">Product</div>
            <Link to="/#auto-request-processing" className="footer-link">
              Auto request processing
            </Link>
            <Link to="/#data-inventory" className="footer-link">
              Data inventory
            </Link>
            <Link to="/#privacy-portal" className="footer-link">
              Consumer privacy portal
            </Link>
            <Link to="/pricing" className="footer-link">
              Pricing
            </Link>
          </div>
          <div className="product-column-footer">
            <div className="footer-column-name">Company</div>
            <Link to="/vision" className="footer-link">
              Privacy vision
            </Link>
            <Link
              to="https://soveren.io/company#careers"
              className="footer-link"
            >
              Careers
            </Link>
            <div className="footer-link-badge">
              <Link to="/#First-name-3" className="footer-link">
                Careers
              </Link>
              <div className="badge">
                <div>we're hiring!</div>
              </div>
            </div>
          </div>
          <div className="product-column-footer">
            <div className="footer-column-name">terms</div>
            <Link
              to="/privacy-center/main"
              target="_blank"
              className="footer-link"
            >
              Privacy portal
            </Link>
            <Link to="/privacy-policy" target="_blank" className="footer-link">
              Privacy policy
            </Link>
            <Link to="/cookie-policy" target="_blank" className="footer-link">
              Cookie policy
            </Link>
            <a href={TermsOfUse} target="_blank" className="footer-link">
              Terms of use
            </a>
            <div className="footer-link-badge">
              <Link to="#First-name-3" className="footer-link">
                Sitemap
              </Link>
              <div className="badge">
                <div>soon</div>
              </div>
            </div>
            <div className="embed-policies w-embed">
              <Link
                to="https://www.iubenda.com/privacy-policy/57434851"
                className="iubenda-white no-brand iubenda-embed"
                title="Privacy Policy "
              >
                Privacy Policy
              </Link>
            </div>
            <div className="embed-policies w-embed">
              <Link
                to="https://www.iubenda.com/privacy-policy/57434851/cookie-policy"
                className="iubenda-white no-brand iubenda-embed"
                title="Cookie Policy "
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright small">© Copyright 2021 — Soveren, Inc.</div>
      </div>
    );
  }
};

export default Footer;
