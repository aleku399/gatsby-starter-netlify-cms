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
    <div className="row">
          <div className="col-2">
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
          <div className="col-10 container">
        {/* <PreviewCompatibleImage imageInfo={img} /> */}
            <div style={{border: "1px solid black"}}>  
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div>
                      <PreviewCompatibleImage  imageInfo={img1} /> 
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div>
                      <PreviewCompatibleImage  imageInfo={img2} />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div>
                      <PreviewCompatibleImage  imageInfo={img3} />
                  </div>
                </div>
              </div>  
              <div className="row mt-5">
                  <div className="col-lg-4 col-sm-6">
                    <div>
                        <PreviewCompatibleImage  imageInfo={img4} /> 
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div>
                        <PreviewCompatibleImage  imageInfo={img5} />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div>
                        <PreviewCompatibleImage  imageInfo={img6} />
                    </div>
              </div>
              {/* <div className="row mt-5">
                  <div className="col-lg-4 col-sm-6">
                    <div>
                      <PreviewCompatibleImage  imageInfo={img7} /> 
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div>
                      <PreviewCompatibleImage  imageInfo={img8} />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div>
                      <PreviewCompatibleImage  imageInfo={img9} />
                    </div>
              </div> */}
            </div>
          </div>  
      </div>
    </div>
  </div>
  )
}

JulyPhotoShootPageTemplate.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const  JulyPhotoShootPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={post.frontmatter.image4}>
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
            fluid(maxHeight: 1500, maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxHeight: 1500, maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxHeight: 1500, maxWidth: 2048, quality: 100) {
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
            fluid(maxHeight: 1400, maxWidth: 2048, quality: 100) {
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
