import React from 'react';

const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image.node.childImageSharp.fluid.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // height: '100%',
      // width: '100%',
      border: "2px solid blue",
    }
    return <div className="slide" style={styles}></div>
  }

export default Slide
