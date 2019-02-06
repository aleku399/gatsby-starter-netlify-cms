import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './Lightbox';

const July = () => (
  <StaticQuery
    query={graphql`
      query {
        julyImages: allFile(filter: {sourceInstanceName: { eq: "july" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox julyImages={data.julyImages.edges} />}
  />
);

export default July
