import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Img } from 'gatsby'
import CoverWrapper from '../components/Cover'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/gliter.jpeg"

export const AllThatGlitters1PageTemplate = ({ title, content, contentComponent, img, author }) => {
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

AllThatGlitters1PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AllThatGlitters1Page = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <CoverWrapper img={betty} title={"ALL THAT GLITTERS"} post="POST">
      <AllThatGlitters1PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </CoverWrapper>
  )
}

AllThatGlitters1Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AllThatGlitters1Page

export const allThatGlitters1PageQuery = graphql`
  query AllThatGlitters1Page($id: String!) {
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
