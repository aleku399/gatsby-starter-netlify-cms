import React from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

class Show extends React.Component {
  constructor(props) {
    super(props)

    this.state = {index: 0 };
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
    });
  }

  render() {
    const { index } = this.state;

    return (
    <div className="trial">
      <MDBCarousel
        onSelect={this.handleSelect}
        activeItem={index}
        length={this.props.images.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          {
            this.props.images.map((item, index) => (
              <MDBCarouselItem itemId={index} key={index}>
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={item.node.childImageSharp.fluid.src}
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
              </MDBCarouselItem>
            ))
          }
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
    );
  }
}

export default Show
