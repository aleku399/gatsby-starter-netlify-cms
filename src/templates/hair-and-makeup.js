import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import CoverWrapper from '../components/Cover'
import Content, { HTMLContent } from '../components/Content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/talk.jpg"

export const HairAndMakeupPageTemplate = ({ title, content, contentComponent, img, author }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="row">
      <div className="col-left col-md-4 col-lg-3 f-height">
        <div className="portfolio-info">
          <h1 class="portfolio-title">{title}:</h1>
          <div className="author" style={{display: "flex", flexDirection: "row", }}>
            <img  className="nd author-avatar" src={img.childImageSharp.fluid.src}  />
            <a href="#" className="author-info"> - AUTHOR: {author}</a>
          </div>
          <PageContent className="content" content={content} />
        </div>        
      </div>
      <div className="col-right col-md-8 col-lg-9">
        <img src={betty} alt="make" className="img-responsive frame"/>
        {/* <PreviewCompatibleImage imageInfo={img} /> */}
      </div>
    </div>
  )
}

HairAndMakeupPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HairAndMakeupPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <CoverWrapper img={betty} title="HAIR AND MAKEUP" post="POST">
      <HairAndMakeupPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </CoverWrapper>
  )
}

HairAndMakeupPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HairAndMakeupPage

export const hairAnMakeupPageQuery = graphql`
  query HairAndMakeupPage($id: String!) {
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
