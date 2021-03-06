import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';

const ProjectPagination = ({ next, prev }) => (
  <div className="row">
    {prev && (
      <div className="col-sm-6">
        <Link to={prev.fields.slug}>
            <div className="pag"  style={{display: "flex", flexDirection: "row"}}>
              <img  className="round" src={prev.frontmatter.image.childImageSharp.fluid.src} alt="footer-image" />
              <div style={{display: "flex", flexDirection: "column", color: "#333", margin: "10px"}}>
                <span className="linktitle"><FaArrowCircleLeft/><span className="l"></span>PREV</span>
                {prev.frontmatter.title}
              </div>
            </div> 
        </Link>
      </div>
    )}

    {next && (
      <div className="col-sm-6 text-right">
        <Link to={next.fields.slug}>
          <div className="pag"  style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
              <div style={{display: "flex", flexDirection: "column", color: "#333",  margin: "10px"}}>
                <span className="linktitle">NEXT<span className="l"></span><FaArrowCircleRight/></span>
                {next.frontmatter.title}
              </div>
              <img  className="round" src={next.frontmatter.image.childImageSharp.fluid.src}  alt="footer-image" /> 
          </div>
        </Link>
      </div>
    )}
  </div>
)

export default ProjectPagination

ProjectPagination.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

ProjectPagination.defaultProps = {
  next: null,
  prev: null,
}
