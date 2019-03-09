import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class Lightbox extends Component {
  static propTypes = {
    julyImages: PropTypes.array.isRequired,
  }

  render() {
    const { julyImages } = this.props;
    return (
      <div>
        {julyImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </div>
    );
  }
}

