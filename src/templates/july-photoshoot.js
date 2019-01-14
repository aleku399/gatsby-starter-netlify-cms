import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/j1.jpg"

export const JulyPhotoShootPageTemplate = ({
  title,
  content,
  contentComponent,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  author 
}) => {
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
        {/* <PreviewCompatibleImage imageInfo={img} /> */}
        <div className="container">
            <div className="gallery">
              <div className="item">
                <PreviewCompatibleImage imageInfo={img1} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img2} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img3} />
              </div>
            </div>
            <div className="gallery">
              <div className="item">
                <PreviewCompatibleImage imageInfo={img4} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img5} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img6} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img7} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img8} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img9} />
              </div>
            </div>
            <div className="gallery">
              <div className="item">
                <PreviewCompatibleImage imageInfo={img10} />
              </div>
              <div className="item">
                <PreviewCompatibleImage imageInfo={img11} />
              </div>
            </div>
          </div>
      </div>
    </div>
    </article>
  </div>
  )
}

JulyPhotoShootPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const  JulyPhotoShootPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      < JulyPhotoShootPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        img1={post.frontmatter.image1}
        img2={post.frontmatter.image2}
        img3={post.frontmatter.image3}
        img4={post.frontmatter.image4}
        img5={post.frontmatter.image5}
        img6={post.frontmatter.image6}
        img7={post.frontmatter.image7}
        img8={post.frontmatter.image8}
        img9={post.frontmatter.image9}
        img10={post.frontmatter.image10}
        img11={post.frontmatter.image11}
        author={post.frontmatter.author}
      />
    </BlogWrapper>
  )
}

JulyPhotoShootPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default  JulyPhotoShootPage

export const julyPhotoShootPageQuery = graphql`
  query  JulyPhotoShootPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        author
        image1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image5 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image6 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image7 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image8 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image9 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image10 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image11 {
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
