import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/b2.jpg"

export const AmCountingMyBlessingsPageTemplate =
({ title, content, contentComponent, img, author }) => {
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

AmCountingMyBlessingsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AmCountingMyBlessingsPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      <AmCountingMyBlessingsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </BlogWrapper>
  )
}

AmCountingMyBlessingsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AmCountingMyBlessingsPage

export const amCountingMyBlessingsPageQuery = graphql`
  query AmCountingMyBlessingsPage($id: String!) {
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
