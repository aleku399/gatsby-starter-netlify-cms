import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Lightbox from "react-image-lightbox";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import BlogWrapper from '../components/Wrapper'
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

const arrImages =  [j1, j2, j3, j4, j5, j7, j8, j6, j9, j10, j11]
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
        <figure>
          <img src={imageSrc} alt="Gallery" className="card-img-top" onClick={()=>
          this.setState({ photoIndex: privateKey, isOpen: true })
          }
          />
        </figure>
      </MDBCol>
      );
    })
  }
  

  render() {
    const PageContent = this.props.contentComponent || this.props.Content
    const { isOpen, photoIndex } = this.state;
    return (
      <div className="allan">
        <div className="row">
              <div className="col-sm-2">
                <div className="media-content">
                  <div className="content">
                    <h3 className="">
                      {this.props.title}
                    </h3>
                    <h6>{this.props.author}</h6>
                    <PageContent className="content" content={this.props.content} />
                  </div>
                </div>
              </div>
              <div className="col-sm-10 container">
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
    <BlogWrapper img={j4} title={post.frontmatter.title}>
      < JulyPhotoShootPageTemplate
        images={arrImages}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`
