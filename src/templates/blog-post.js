import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { DiscussionEmbed } from "disqus-react";
import BlogWrapper from '../components/Wrapper'
import Slider from '../components/slider'
import  Carousel from '../components/slider/Carousel'
import PostLink from "../components/Post-link"
import Content, { HTMLContent } from '../components/Content'
import ProjectPagination from "../components/ProjectPagination"
import Insta from "../components/Insta"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  tags,
  title,
  helmet,
  photos,
  paths,
  id,
  next,
  prev,
}) => {
  const PostContent = contentComponent || Content
  const disqusShortname = " http-localhost-8000-XKdULE3kTi.disqus.com"
  const disqusConfig = {
    identifier: id,
    title: title,
  }

  return (
    <div className="allan">
      {helmet || ''}
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <PostContent content={content} />
          </div>
          <ProjectPagination next={next} prev={prev} /> 
        </div>
        <div className="col-md-4 side">
          <h3 className="recent">RECENT POSTS</h3>
          <hr></hr>
          <ul className="sluglist">
            {
              paths.filter(edge => !!edge.node.frontmatter.date).map( (edge, i) => (
                <li className="slug" key={i}>
                  <PostLink key={edge.node.id} post={edge.node} />
                </li>
              ))
            }
          </ul>
          <h3 className="recent">INSTAGRAM</h3>
          <hr></hr>
          <Insta />
        </div>
      </div>
      <div className="row">
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { next, prev } = pageContext
  const photos = data.photos
  const routes = data.routes
  console.log(`photos: ${photos}`)
  console.log(data)
  return (
    <BlogWrapper
      img={post.frontmatter.image}
      title={post.frontmatter.title}
      slug={post.fields.slug}
      >
      <BlogPostTemplate
        next={next}
        prev={prev}
        id={post.id}
        paths={routes.edges}
        photos={photos.edges}
        date={post.frontmatter.date}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </BlogWrapper>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($slug: String!, $absolutePathRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
    photos: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    routes:    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path 
          }
        }
      }
    }
  }
`
