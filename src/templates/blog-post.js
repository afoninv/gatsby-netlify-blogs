import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import {graphql, Link, StaticQuery} from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SubscribeFormBottom from "../components/forms/subscribeFormBottom";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  title,
  helmet,
  author,
  date
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section ">
      {helmet || ""}
      <div className="content">
        <div className="blog">
          <div className='blogpost content'>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>

            {/*<div className='blogpost__author'>
              <img alt={author} src={authorImage} className='blogpost__author-image'/>
              <div>
                  <span className="is-block blogpost__author-name">
                    {author}
                  </span>
                <span className="is-block blogpost__date">
                    {date}
                  </span>
              </div>
            </div>*/}

          {featuredimage ? (
            <div className='blogpost__image blogpost__image_detail'>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                }}
              />
            </div>
          ) : null}

            <div className='blogpost__content'>
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`} className='taglist__item'>
                    <Link to={`/tags/${kebabCase(tag)}/`} className='taglist__link'>{tag}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

        </div>
      </div>

      <SubscribeFormBottom type='fullWidth' id='blogpost_hubspotForm_bottom'/>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid( quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        author
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
