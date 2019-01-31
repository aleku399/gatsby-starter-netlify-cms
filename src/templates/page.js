import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
import Page from '../components/portfolio/page'
import betty from "../img/b2.jpg"
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PagePageTemplate = ({
    all,
    creative,
    fashion,
    travel,
    photo,
    traits, }) => {
  
  return (
  <div  className="allan">
    alex
    <Page />
  </div>
  )
}

PagePageTemplate.propTypes = {
  all: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PagePage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      <PagePageTemplate
        all={post.frontmatter.all}
        creative={post.frontmatter.creative}
        fashion={post.frontmatter.fashion}
        travel={post.frontmatter.travel}
        photo={post.frontmatter.photo}
        traits={post.frontmatter.traits}
      />
    </BlogWrapper>
  )
}

PagePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PagePage

export const PagePageQuery = graphql`
  query PagePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        all
        creative
        fashion
        travel
        photo
        traits
      }
    }
  }
`