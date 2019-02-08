import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from "gatsby"

// import PostLink from './Post-link'
import Navlayout from '../components/Navbar'
import Footer from '../components/Footer'
import './all.scss'

const BlogWrapper = ({ children, img, title, slug, post }) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          
        </Helmet>
        <Navlayout />
        <main role="main" style={{backgroundColor: "#F1F1F1", paddingBottom: "15px",}}>
          <header
            className="jumbotron jumbotron-fluid"
            id="top-area"
            style={{ backgroundImage: `url(${
              !!img.childImageSharp
              ? img.childImageSharp.fluid.src
              : img
            })` }}
          >
            <div className="container">
              <h3 className="display">
                {title}
              </h3>
              <div className="row">
                
                  <Link to ="/">
                    HOME 
                  </Link>
                  <div></div>
                      /
                  <Link to={slug}> 
                    {title}
                  </Link> 
                
                {/* < PostLink post={post}/> */}
              </div>
            </div>
          </header>
          <div

            style={{
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
              {children}
          </div>
        </main>
        <Footer />
      </div>
    )}
  />
)

export default BlogWrapper
