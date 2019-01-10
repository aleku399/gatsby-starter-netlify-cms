import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Img } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/gliter.jpeg"

export const AllThatGlittersPageTemplate = ({ title, content, contentComponent, img, author }) => {
  const PageContent = contentComponent || Content

  return (
  <div className="allan">
    <article className="media">
    <div className="columns">
      <div className="column">
        <div className="media-content">
            <div className="content">
              <h3 className="">
                {title}
              </h3>
              <h6>{author}</h6>
              <PageContent className="content" content={content} />
            </div>
        </div>
      </div>
      <div className="column">
        {/* <figure className="media-right">
          <img src={betty} alt={betty} width={1000}/>
        </figure> */}
        <PreviewCompatibleImage imageInfo={img} /> 
      </div>
    </div>
    </article>
  </div>
  )
}

AllThatGlittersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AllThatGlittersPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      <AllThatGlittersPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img={post.frontmatter.image}
        author={post.frontmatter.author}
      />
    </BlogWrapper>
  )
}

AllThatGlittersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AllThatGlittersPage

export const allThatGlittersPageQuery = graphql`
  query AllThatGlittersPage($id: String!) {
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
