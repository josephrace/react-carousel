import React from 'react';
import PropTypes from 'prop-types';
import { SLIDE_CLASS, SLIDE_CLASS_ACTIVE, SLIDE_CLASS_NEXT } from './constants';

const CarouselSlide = props => {
  const {
    children,
    isActive,
    isNext,
    duration,
    busy,
    animateIn,
    animateOut,
  } = props;

  let classList = `${SLIDE_CLASS}`;

  if (isActive) {
    classList += ` ${SLIDE_CLASS_ACTIVE}`;
  }

  if (isActive && busy) {
    classList += ` ${animateOut}`;
  }

  if (isNext) {
    classList += ` ${SLIDE_CLASS_NEXT}`;
  }

  if (isNext && busy) {
    classList += ` ${animateIn}`;
  }

  let child = children;

  // Rudimentary lazy loading of images
  if (
    (isNext || isActive) &&
    children.type === 'img' &&
    children.props['data-src']
  ) {
    child = <img {...children.props} src={children.props['data-src']} />;
  }

  return (
    <div
      className={classList}
      style={{ animationDuration: `${duration / 1000}s` }}
    >
      {child}
    </div>
  );
};

CarouselSlide.propTypes = {
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool,
  isNext: PropTypes.bool,
  duration: PropTypes.number.isRequired,
  busy: PropTypes.bool,
  animateIn: PropTypes.string.isRequired,
  animateOut: PropTypes.string.isRequired,
};

export default CarouselSlide;
