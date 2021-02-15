import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
/*import SubscribeFormTop from "./forms/subscribeFormTop";
import SubscribeFormMiddle from "./forms/subscribeFormMiddle";*/
import MappingTemplate from "./MappingTemplate";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blogpost__list is-multiline">
        {/*<SubscribeFormTop id='blogpost_hubspotForm_top'/>
        <SubscribeFormMiddle type='background' id='blogpost_hubspotForm_middle'/>*/}

        <div className="blogpost__list">

          {posts &&
          posts.map(({ node: post }) => (
            <article key={post.id} className='blogpost__item'>
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className='blogpost__image'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="blogpost__title has-text-primary is-block"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>

                </p>
              </header>
              <p className='blogpost__description'>
                {post.frontmatter.description}
              </p>

              <div className='blogpost__author'>
                <img alt={post.frontmatter.author} src={post.fields.author.frontmatter.photo.childImageSharp.fluid.src} className='blogpost__author-image'/>
                <div>
                    <span className="is-block blogpost__author-name">
                      {post.frontmatter.author}
                    </span>
                  <span className="is-block blogpost__date">
                      {post.frontmatter.date}
                    </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <MappingTemplate />
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          # filter: { frontmatter: { templateKey: {regex: "/(blog-post|authors-page)/"  } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
                author {
                  frontmatter {
                    photo {
                      childImageSharp {
                        fluid(maxWidth: 120, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                author
              }
              
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
