
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import ocean from "../img/ocean.jpg"
import phone from "../img/phone.jpg"
import red from "../img/red.jpg"
import sit from "../img/sit.jpg"
import talk from "../img/talk.jpg"
import tub from "../img/tub.jpg"

export default class IndexPage extends React.Component {
  render() {
   // const { data } = this.props
   // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
          <div className="container">
            <div className="gallery">
              <div className="item">
                <img src={sit} alt="betty"/>
              </div>
              <div className="item">
                <img src={talk} alt="betty"/>
              </div>
              <div className="item">
                <img src={tub} alt="betty"/>
              </div>
            </div>
            <div className="gallery">
              <div className="item">
                <img src={ocean} alt="betty"/>
              </div>
              <div className="item">
                <img src={phone} alt="betty"/>
              </div>
              <div className="item">
                <img src={tub} alt="betty"/>
              </div>
            </div>
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
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

