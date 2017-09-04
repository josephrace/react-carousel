import React from 'react';
import PropTypes from 'prop-types';
import {
  DOTS_WRAP_CLASS,
  DOTS_ITEM_CLASS,
  DOTS_ACTIVE_CLASS,
} from './constants';

const CarouselDots = ({ count, activeIndex, onClickDots }) => {
  const dots = [];

  for (let i = 0; i < count; i++) {
    const classList = `
      ${DOTS_ITEM_CLASS} ${activeIndex === i ? DOTS_ACTIVE_CLASS : ''}
    `;

    dots.push(
      <div
        key={i}
        className={classList}
        onClick={() => {
          onClickDots(i);
        }}
      />
    );
  }

  return <div className={DOTS_WRAP_CLASS}>{dots}</div>;
};

CarouselDots.propTypes = {
  count: PropTypes.number,
  activeIndex: PropTypes.number,
  onClickDots: PropTypes.func.isRequired,
};

export default CarouselDots;
