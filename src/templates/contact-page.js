import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import { FaHome } from 'react-icons/fa';
import betty from "../img/talk.jpg"

export const ContactPageTemplate = ({ description,  heading, mail, address }) => {
  return (
  <div>
    <div className="container">
      <div className="content-wrap">
        <div className="row">
            <div className="col-md-4">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p><FaHome/> <b>{address}</b></p>
                      <p>
                        <a href="/mailto:bettinahtianah19@gmail.com">
                          {mail}
                        </a>
                      </p>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <h4>{heading}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-md-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                  <h2 className="wpb_heading wbp_singleimage_heading">{description}</h2>
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper vc_box_border vc_box_border_grey">
                      <img  style={{border: "6px solid whiteSmoke"}}  src={betty} alt="betty"/>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

ContactPageTemplate.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  address:  PropTypes.string.isRequired
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <Layout>
      <ContactPageTemplate
        description={post.frontmatter.description}
        heading={post.frontmatter.heading}
        mail={post.frontmatter.mail}
        address={post.frontmatter.address}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        mail
        address
        description
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
`
