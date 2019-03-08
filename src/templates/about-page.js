import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/about.jpeg"

export const AboutPageTemplate = ({ title, content, contentComponent, img, heading }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-md-8">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wbp_text_column wbp_content_element">
                  <div className="wbp_wrapper">
                    <h3>{title}</h3>
                    <h6>{heading}</h6>
                    <PageContent className="content" content={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" >
            <div className="vc_column-inner">
              <div className="wpb_wrapper">  
                <div className="wbp_single_image wbp_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image_wrapper vc_box_border_grey">
                      <img className="single" src={betty} alt="about-image" width="755" height="1048"/>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        img={post.frontmatter.image}
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
