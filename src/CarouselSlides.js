import React from 'react';
import PropTypes from 'prop-types';
import CarouselSlide from './CarouselSlide';
import { SLIDES_CLASS } from './constants';

const CarouselSlides = props => {
  return (
    <div className={SLIDES_CLASS}>
      {props.children.map((child, i) => (
        <CarouselSlide
          key={i}
          isActive={i === props.activeIndex}
          isNext={i === props.nextIndex}
          duration={props.duration}
          busy={props.busy}
          animateIn={props.inClass}
          animateOut={props.outClass}
        >
          {child}
        </CarouselSlide>
      ))}
    </div>
  );
};

CarouselSlides.propTypes = {
  children: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  nextIndex: PropTypes.number,
  duration: PropTypes.number.isRequired,
  busy: PropTypes.bool,
  inClass: PropTypes.string.isRequired,
  outClass: PropTypes.string.isRequired,
};

export default CarouselSlides;
