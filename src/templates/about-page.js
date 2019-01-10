import React from 'react'
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import betty from "../img/about.jpeg"

export const AboutPageTemplate = ({ title, content, contentComponent, img, heading }) => {
  const PageContent = contentComponent || Content

  return (
  <div className="alex">
    <article className="media">
    <div className="columns">
    <div className="column">
    <div className="media-content">
        <div className="content">
          <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h3>
          <h6>{heading}</h6>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
    <div className="column">
      <figure className="media-right">
          <img src={betty} alt={betty} width={400}/>
      </figure>
    </div>
    </div>
    </article>
  </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        heading={post.frontmatter.heading}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
      }
    }
  }
`
