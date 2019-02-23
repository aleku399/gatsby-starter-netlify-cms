import React from 'react';

const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image.node.childImageSharp.sizes.src})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '400px',
      width: '100%',
      border: "2px solid blue",
    }
    return <div className="slide" style={styles}></div>
  }

export default Slide
