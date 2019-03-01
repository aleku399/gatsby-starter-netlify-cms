import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image'

class Show extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      //autoplay: true,
      //speed: 2000,
      //autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const slides = this.props.images.map((item, index) => {
      return (
        <div
          key={index}
        >
          <Img
            fluid={{...item.node.childImageSharp.fluid.src}}
            key={index} 
          />
        </div>
      );
    });

    return (
      <div>
        <Slider {...settings}>
          {slides}
        </Slider>
      </div>
    );
  }
}

export default Show
