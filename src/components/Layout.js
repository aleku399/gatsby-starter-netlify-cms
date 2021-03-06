import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navlayout from '../components/Navbar'
import Footer from '../components/Footer'
// normalizes css with in browsers
import 'modern-normalize/modern-normalize.css'
// loads global styles
import './all.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div style={{backgroundColor: " #F1F1F1"}}>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
	  <!-- Global site tag (gtag.js) - Google Analytics -->
	  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92854724-1"></script>
	  <script>
	    window.dataLayer = window.dataLayer || [];
	    function gtag(){dataLayer.push(arguments);}
	    gtag('js', new Date());
	    gtag('config', 'UA-92854724-1');
	  </script>
	  <meta name="google-site-verification" content="wZNcA9uJEvsi9sfoW-KOsuVXHg1F9aP5KMdEJPjc4QA" />
          <meta name="description" content={data.site.siteMetadata.description} />

          {/* <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" /> 

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" /> */}
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content={data.site.siteMetadata.description} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
        {/* <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />   */}
        </Helmet>
        <Navlayout />
        <div id="body-content">
          <section id="content-section" className="page">
            {children}
          </section>
        </div>
        <Footer/>
      </div>
    )}
  />
)

export default Layout
