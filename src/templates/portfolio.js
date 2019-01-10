import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import BlogWrapper from '../components/Wrapper'
import Content, { HTMLContent } from '../components/Content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import ocean from "../img/ocean.jpg"
import phone from "../img/phone.jpg"
import red from "../img/red.jpg"
import sit from "../img/sit.jpg"
import talk from "../img/talk.jpg"
import tub from "../img/tub.jpg"
import betty from "../img/phone.jpg"

export const PortfolioPageTemplate = ({
    all,
    creative,
    fashion,
    travel,
    photo,
    traits, }) => {
  
  return (
  <div className="allan">
    <article className="media">
    <div className="columns">
      <div className="column">
        <div className="media-content">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" title="bettinah">
                        all
                    </Link>
                    <Link to="/" className="navbar-item" title="bettinah">
                        creative
                    </Link>
                    <Link to="/" className="navbar-item" title="bettinah">
                        fashion
                    </Link>
                    <Link to="/" className="navbar-item" title="bettinah">
                        travel
                    </Link>
                    <Link to="/" className="navbar-item" title="bettinah">
                        photo
                    </Link>
                    <Link to="/" className="navbar-item" title="bettinah">
                        traits
                    </Link>
                </div>
            </nav>
        </div>
      </div>
    
      <div className="tile is-ancestor">
          <div className="tile is-vertical is-8 has-centred j">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <img src={sit} alt="betty" />
                </article>
                <article className="tile is-child">
                  <img src={talk} alt="betty" />
                </article>
                <article className="tile is-child">
                  <img src={tub} alt="betty" />
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <img src={ocean} alt="betty" />
                </article>
                <article className="tile is-child">
                  <img src={phone} alt="betty" />
                </article>
                <article className="tile is-child ">
                  <img src={red} alt="betty" />
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <img src={sit} alt="betty" />
                </article>
                <article className="tile is-child">
                  <img src={talk} alt="betty" />
                </article>
                <article className="tile is-child">
                  <img src={tub} alt="betty" />
                </article>
              </div>
            </div>
          </div>
        {/* <PreviewCompatibleImage imageInfo={img} /> */}
      </div>
    </div>
    </article>
  </div>
  )
}

PortfolioPageTemplate.propTypes = {
  all: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <BlogWrapper img={betty}>
      <PortfolioPageTemplate
        all={post.frontmatter.all}
        creative={post.frontmatter.creative}
        fashion={post.frontmatter.fashion}
        travel={post.frontmatter.travel}
        photo={post.frontmatter.photo}
        traits={post.frontmatter.traits}
      />
    </BlogWrapper>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        all
        creative
        fashion
        travel
        photo
        traits
      }
    }
  }
`
