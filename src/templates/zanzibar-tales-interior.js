import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Img } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../../static/img/z1.jpeg"

export const ZanzibarTalesInteriorPageTemplate = ({ title, content, contentComponent, img, author }) => {
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

 ZanzibarTalesInteriorPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const  ZanzibarTalesInteriorPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      < ZanzibarTalesInteriorPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </BlogWrapper>
  )
}

 ZanzibarTalesInteriorPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default  ZanzibarTalesInteriorPage

export const zanzibarPageQuery = graphql`
  query  ZanzibarTalesInteriorPage($id: String!) {
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
