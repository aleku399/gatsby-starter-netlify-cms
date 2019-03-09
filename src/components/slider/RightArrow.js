import React from 'react';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <FaArrowCircleRight  />
    </div>
  );
}


export default RightArrow;
