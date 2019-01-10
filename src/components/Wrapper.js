import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const BlogWrapper = ({ children, img }) => (
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
      <div  className='body'>
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
        <Navbar />
        <section className=" hero is-light  is-fullheight-with-navbar">
              <div className="bg" style={{ backgroundImage: `url(${img})` }}>alex</div>
              <div className="hero-body ">
                <div className='container '>
                 {children}
                </div>
              </div>
        </section>
        <Footer />
      </div>
    )}
  />
)

export default BlogWrapper
