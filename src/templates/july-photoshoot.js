import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import betty from "../img/j1.jpg"

export const JulyPhotoShootPageTemplate = ({ title, content, contentComponent, img, author }) => {
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
        <figure className="media-right">
          <img src={betty} alt={betty} width={1000}/>
        </figure>
        {/* <PreviewCompatibleImage imageInfo={img} /> */}
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
        img={post.frontmatter.image}
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
        # image1 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image2 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image3 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image4 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image5 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image6 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image7 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image8 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image9 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image10 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        # image11 {
        #   childImageSharp {
        #     fluid(maxWidth: 2048, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
    }
  }
`
