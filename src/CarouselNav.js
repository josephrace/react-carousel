import React from 'react';
import PropTypes from 'prop-types';
import {
  DIRECTION_RIGHT,
  DIRECTION_LEFT,
  NAV_WRAP_CLASS,
  NAV_ITEM_CLASS,
} from './constants';

const CarouselNav = ({ onClickNav, nextText, prevText }) => (
  <div className={NAV_WRAP_CLASS}>
    <div
      className={`${NAV_ITEM_CLASS}`}
      onClick={() => {
        onClickNav(DIRECTION_LEFT);
      }}
    >
      {prevText}
    </div>
    <div
      className={`${NAV_ITEM_CLASS}`}
      onClick={() => {
        onClickNav(DIRECTION_RIGHT);
      }}
    >
      {nextText}
    </div>
  </div>
);

CarouselNav.propTypes = {
  onClickNav: PropTypes.func.isRequired,
  nextText: PropTypes.string.isRequired,
  prevText: PropTypes.string.isRequired,
};

export default CarouselNav;
