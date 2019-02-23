import React from 'react';
import {FaArrowCircleLeft} from 'react-icons/fa'

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <FaArrowCircleLeft  />
    </div>
  );
}

export default LeftArrow;