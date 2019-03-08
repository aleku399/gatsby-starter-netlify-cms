import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const NewsPageTemplate = ({ title, content, contentComponent, heading }) => {
  const PageContent = contentComponent || Content

  return (
  <div>
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-md-12">
            <div className="vd_column-inner">
              <div className="wpb_wrapper">
                <h4 className="line">{title}</h4>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="content-wrap">
        <div className="row">
          <div className="col-md-12">
            <div className="vc_column-inner">
              <div className="wbp_wrapper">
                <div className="wpb_text_column wbp_content_element">
                  <p><strong>{heading}</strong></p>
                  <PageContent  content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

NewsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <NewsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
      />
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NewsPage

export const newsPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`
