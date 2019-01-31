import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const NewsPageTemplate = ({ title, content, contentComponent, heading }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="alex">
      <div>
          <h5 className="line">{title}</h5>
        <div>
          <div className="trial">
            <strong>{heading}</strong>
          </div>
          <PageContent  content={content} />
        </div>
      </div>
    </section>
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
