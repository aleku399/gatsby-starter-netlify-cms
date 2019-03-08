import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import CoverWrapper from '../components/Cover'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/b2.jpg"

export const AmCountingMyBlessings3PageTemplate =
({ title, content, contentComponent, img, author }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="row">
      <div className="col-left col-md-4 col-lg-3 f-height">
        <div className="porfolio-info">
          <div className="portfolio-info-inner">
            <h1 class="portfolio-title">{title}:</h1>
            <div className="author" style={{display: "flex", flexDirection: "row", }}>
              <img  className="nd author-avatar" src={img.childImageSharp.fluid.src}  />
              <a href="#" className="author-info"> - AUTHOR: {author}</a>
            </div>
            <PageContent  content={content} />
          </div>
        </div>
      </div>
      <div className="col-right col-md-8 col-lg-9">
          {/* <img src={betty} alt="All that Glitters" className="img-responsive"/> */}
        <PreviewCompatibleImage imageInfo={img} />  
      </div>
    </div>
  )
}

AmCountingMyBlessings3PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AmCountingMyBlessings3Page = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <CoverWrapper img={post.frontmatter.image} title="AM COUNTING MY BLESSINGS" post="POST">
      <AmCountingMyBlessings3PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </CoverWrapper>
  )
}

AmCountingMyBlessings3Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AmCountingMyBlessings3Page

export const amCountingMyBlessings3PageQuery = graphql`
  query AmCountingMyBlessings3Page($id: String!) {
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
