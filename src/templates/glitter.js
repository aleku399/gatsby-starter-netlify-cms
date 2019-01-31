import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Img } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../../static/img/about2.jpeg"

export const GlitterPageTemplate = ({ title, content, contentComponent, img, author }) => {
  const PageContent = contentComponent || Content

  return (
  <div className="allan">
    
    <div className="row">
      <div className="col-md-4">
        <h3 className="">
          {title}
        </h3>
        <h6>{author}</h6>
        <PageContent className="content" content={content} />         
      </div>
      <div className="col-md-8">
        <PreviewCompatibleImage imageInfo={img} />  
      </div>
    </div>
    
  </div>
  )
}

GlitterPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GlitterPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      <GlitterPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </BlogWrapper>
  )
}

GlitterPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GlitterPage

export const glitterPageQuery = graphql`
  query GlitterPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        author
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
