import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Tags from '../components/Tags'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(data)
    return (
      <Layout>
          <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          <div className="blog-posts">
            {posts
              .filter((post) => post.node.frontmatter.title.length > 0)
              .map(({ node: post }, index) => {
            return (
              <div
                className={`blog-post-preview ${
                index % 2 !== 0 ? 'inverse' : ''
                }`}
                key={post.id}
              >
              <div className="post-info">
                <h1 className="title">
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
              <div className="meta">
                  <div className="tags">
                  <Tags list={post.frontmatter.tags} />
              </div>
              <h4 className="date">{post.frontmatter.date}</h4>
            </div>
            <p className="excerpt">{post.excerpt}</p>
            <div>
              <Link to={post.fields.slug} className="see-more">
              Keep Reading →
              </Link>
            </div>
          </div>
         <div className="post-img">
           <PreviewCompatibleImage imageInfo={post.frontmatter.image} alt="image" />
         </div>
       </div>
      );
    })}
   </div>     
  </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 700)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            tags
            date(formatString: "MMMM DD, YYYY")
            image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
