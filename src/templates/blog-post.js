import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
// import { DiscussionEmbed } from "disqus-react";
import {FaFolder, FaClock} from 'react-icons/fa';
import BlogWrapper from '../components/Wrapper'
import Slider from '../components/slider'
import  Carousel from '../components/slider/Carousel'
import  Show from '../components/slider/Show'
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
  day,
  prev,
}) => {
  const PostContent = contentComponent || Content
  const disqusShortname = " http-localhost-8000-XKdULE3kTi.disqus.com"
  const disqusConfig = {
    identifier: id,
    title: title,
  }

  return (
    <div>
      {helmet || ''}
      <div className="row">
        <div className="col-md-12">
          <div className="content-wrap thin">
            <div className="blog-list">
              <div className="row">
                <div className="col-md-8">
                  <div className="blog-list-items-wrap">
                      <article>
                        <div className="blog-list-item">
                          <Slider images={photos} />
                          <div class="bli-info">
                            <h2 class="bli-title">
                              <a href="#" title="Meet and greet">{title}</a>
                            </h2>
                            <div class="bli-meta">
                              <FaClock />
                              <a href="#" class="article-time">{date}</a>
                              <FaFolder/>
                              <a class="article-time">BLOG</a>
                            </div>
                            <PostContent content={content} />        
                          </div>
                        </div>
                      </article>
                    </div>
                  <div className="blog-single-nav">
                      <ProjectPagination next={next} prev={prev} /> 
                  </div>
                  <div id="blog-post-comments">
                    <div className="clearfix">
                      <div className="pull-right" >
                        <small>
                            <a href="#" style={{display: "none"}}>Click here to reply</a>
                          </small>
                      </div>
                    </div>
                    <div id="respond" className="comment-respond">
                      <h3 id="reply-title" className="comment-reply-title">
                        Leave a reply
                        <small>
                          <a href="#" style={{display: "none"}}>Cancel reply</a>
                        </small>
                      </h3>
                      <form id="commentform" className="comment-form">
                          <div id="comment-status"></div>
                          <p className="comment-notes">
                            <span id="email-notes">
                              Your email address will not be published.
                            </span>
                            <span className="required">*</span>
                          </p>
                          <p className="comment-form-comment">
                            <label for="comment">Comment</label>
                            <textarea
                              className="form-control"
                              placeholder="COMMENT"
                              id="comment"
                              name="comment"
                              cols="45"
                              rows="8"
                              maxlength="65525"
                              >
                            </textarea>
                          </p>
                          <p className="comment-form-author">
                            <label for="author">
                              Name
                              <span className="required">*</span>
                            </label>
                            <input
                              className="form-control"
                              placeholder="Name"
                              id="author"
                              type="text"
                              value size="30"
                              maxlength="245"
                              required="required"
                            />
                          </p>
                          <p className="comment-form-email">
                            <label for="email">
                              Email
                              <span className="required">*</span>
                            </label>
                            <input
                              className="form-control"
                              placeholder="Email"
                              id="email"
                              type="text"
                              value size="30"
                              maxlength="100"
                              required="required"
                            />
                          </p>
                          <p className="comment-form-url">
                            <label for="url">Website</label>
                            <input
                              className="form-control"
                              placeholder="WEBSITE"
                              id="url"
                              name="url"
                              type="text"
                              value size="30"
                              maxlength="200"
                            />
                          </p>
                          <p className="form-submit">
                            <input name="submit" type="submit" class="submit" value="Post Comment" />
                          </p>
                        </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 side">
                  <div className="sidebar sidebar-right">
                    <div className="row">
                      <div className="col-md-12 col-sm-6">
                      <div className="sidebar-widget sidebar-categories">
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
                      </div>
                    </div>
                      <div className="col-md-12 col-sm-6">
                      <div className="sidebar-widget sidebar-categories">
                        <h3 className="recent">Recent Comments</h3>
                        <hr></hr>
                        <ul id="recentcomments">
                          <li className="recentcomments">
                            <span className="comment-author-link">Elaine K</span>
                            on
                            <a href="#">Wild waters Lodge</a>
                          </li>
                        </ul>                  
                      </div>
                    </div>
                      <div className="col-md-12 col-sm-6">
                      <div className="sidebar-widget sidebar-categories">
                        <h3 className="recent">INSTAGRAM</h3>
                        <hr></hr>
                        <Insta />
                    </div>    
                  </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
        </div>
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
      post="POST"
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
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
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
