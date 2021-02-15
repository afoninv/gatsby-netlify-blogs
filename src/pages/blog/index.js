import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import SubscribeFormBottom from "../../components/forms/subscribeFormBottom";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />

              <SubscribeFormBottom type='fullWidth' id='blogpost_hubspotForm_bottom'/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
