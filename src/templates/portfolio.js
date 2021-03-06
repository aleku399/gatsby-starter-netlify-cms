import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import CoverWrapper from '../components/Cover'
import Portfolio from '../components/portfolio'
// import TabsPage from '../components/portfolio/Try'
import betty from "../../static/img/about2.jpeg"
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PortfolioPageTemplate = ({
    all,
    creative,
    fashion,
    travel,
    photo,
    traits, }) => {
  
  return (
  <div  className="row">
    <Portfolio  />
  </div>
  )
}

PortfolioPageTemplate.propTypes = {
  all: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <CoverWrapper img={betty} title="PORTFOLIO" post="POST">
      <PortfolioPageTemplate
        all={post.frontmatter.all}
        creative={post.frontmatter.creative}
        fashion={post.frontmatter.fashion}
        travel={post.frontmatter.travel}
        photo={post.frontmatter.photo}
        traits={post.frontmatter.traits}
      />
    </CoverWrapper>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        all
        creative
        fashion
        travel
        photo
        traits
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
