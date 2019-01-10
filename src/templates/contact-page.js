import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import { FaHome } from 'react-icons/fa';
import betty from "../img/talk.jpg"

export const ContactPageTemplate = ({ description,  heading, mail, address }) => {
  return (
  <div className="alex">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <div>
              <p><FaHome/> {address}</p>
              <a href="/mailto:bettinahtianah19@gmail.com">
                {mail}
              </a>
            </div>
          </div>
        </div>
        <div className="level-item has-text-centered">
        <p>{heading}</p>
        </div>
      </nav>
      <div className="k s">
        <div className="container has-text-centered">
          <p>{description}</p>
          <img className="h" src={betty} alt="betty"/>
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
