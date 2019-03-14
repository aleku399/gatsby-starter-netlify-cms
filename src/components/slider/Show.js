import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Show extends React.Component {
  render() {
  
    return (
      <div>
        <Carousel  showThumbs={false}  dynamicHeight className="trial">
          {
            this.props.images.map((item, index) => (
              <div key={index}>
                <img
                  src={item.node.childImageSharp.fluid.src}
                />
              </div>
            ))
          }
        </Carousel>
      </div>
    );
  }
}

export default Show
