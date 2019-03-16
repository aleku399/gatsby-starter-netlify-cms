import React from 'react';

const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${!!image.node
        ? image.node.childImageSharp.fluid.src
        : image
      })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 20%',
      // height: ' 400px;',
      // width: '783px',
      // border: "2px solid blue",
    }
    return <div className="slide" style={styles}></div>
  }

export default Slide
