import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Lightbox from "react-image-lightbox";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import CoverWrapper from '../components/Cover'
import Content, { HTMLContent } from '../components/Content'

import j1 from "../july/jul29.jpg"
import j2 from "../july/jul30.jpg"
import j3 from "../july/jul31.jpg"
import j4 from "../july/jul28.jpg"
import j5 from "../july/jul33.jpg"
import j7 from "../july/jul27.jpg"
import j8 from "../july/jul32.jpg"
import j9 from "../july/jul27.jpg"
import j10 from "../july/jul20.jpg"
import j11 from "../july/jul24.jpg"
import j6 from "../july/jul22.jpg"

const arrImages =  [j2, j3, j4, j5, j7, j1, j8, j6, j9, j10, j11]
export class JulyPhotoShootPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: -1,
      isOpen: false,
    }
  }


  renderImages = () => {
    let photoIndex = -1;
    return this.props.images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
    return (
      <MDBCol md="4" key={photoIndex}>
        <div className="sugar">
          <img src={imageSrc} alt="Gallery" onClick={()=>
          this.setState({ photoIndex: privateKey, isOpen: true })
          }
          />
        </div>
      </MDBCol>
      );
    })
  }
  

  render() {
    const PageContent = this.props.contentComponent || this.props.Content
    const { isOpen, photoIndex } = this.state;
    return (
      <div className="row">
        <div className="col-left col-md-4 col-lg-3 f-height">
          <div className="portfolio-info">
            <div className="portfolio-info-inner">
              <h1 className="portfolio-title">
                {this.props.description} :
              </h1>
              <div className="author" style={{display: "flex", flexDirection: "row", }}>
                <img  className="nd author-avatar" src={this.props.image.childImageSharp.fluid.src}  />
                <a href="#" className="author-info"> - AUTHOR: {this.props.author}</a>
              </div>
              <PageContent className="content" content={this.props.content} />
            </div>
          </div>
        </div>
        <div className="col-right col-md-8 col-lg-9">
          <MDBContainer className="mt-5">
              <div className="mdb-lightbox">
                <MDBRow>
                  {this.renderImages()}
                </MDBRow>
              </div>
            {isOpen && (
              <Lightbox
              style={{
                overlay: {
                  backgroundColor: 'black'
                },
                content: {
                  color: 'blue'
                }
              }}
                mainSrc={this.props.images[photoIndex]}
                nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
                prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
                imageTitle={photoIndex + 1 + "/" + this.props.images.length}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length
                })
              }
                onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.props.images.length
                })
              }
              />
          )}
          </MDBContainer>
        </div>
      </div>
    )
  }
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
    <CoverWrapper img={j4} title={post.frontmatter.title} post="POST">
      <JulyPhotoShootPageTemplate
        images={arrImages}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        content={post.html}
        author={post.frontmatter.author}
        image={post.frontmatter.image}
      />
    </CoverWrapper>
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
