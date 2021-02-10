import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import "./blogs.scss";
import "./webflow.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="body">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132991362-10" />
        <script src={`${withPrefix("/")}js/gtm.js`} />


      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W7C2KQB"
          height="0"
          width="0"
          style="display:none;visibility:hidden"/>
      </noscript>

      <Helmet>
        <script src={`${withPrefix("/")}js/iubenda.js`} />
        <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async />
      </Helmet>
    </div>
  );
};

export default TemplateWrapper;
