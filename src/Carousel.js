import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselSlides from './CarouselSlides';
import CarouselNav from './CarouselNav';
import CarouselDots from './CarouselDots';
import { getOppositeAnimation } from './utils';
import { DIRECTION_RIGHT, DIRECTION_LEFT, CAROUSEL_CLASS } from './constants';

export default class Carousel extends Component {
  static propTypes = {
    interval: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    animateIn: PropTypes.string.isRequired,
    animateOut: PropTypes.string.isRequired,
    nextText: PropTypes.string.isRequired,
    prevText: PropTypes.string.isRequired,
    autoplay: PropTypes.bool,
    nav: PropTypes.bool,
    dots: PropTypes.bool,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
  };

  static defaultProps = {
    interval: 3000,
    duration: 500,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    nextText: 'Next',
    prevText: 'Prev',
    autoplay: true,
    nav: true,
    dots: false,
  };

  /**
   * Class constructor
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      nextIndex: null,
      busy: false,
      inClass: '',
      outClass: '',
    };
  }

  /**
   * Invoked after component is mounted
   */
  componentDidMount() {
    if (this.props.autoplay) {
      this._startAutoplay();
    }
  }

  /**
   * Invoked before component is unmounted
   */
  componentWillUnmount() {
    this._stopAutoplay();
  }

  /**
   * Handle click of prev/next elements
   *
   * @param {string} direction Direction constant
   */
  handleClickNav = direction => {
    if (!this.state.busy) {
      this._changeSlide(direction);
    }
  };

  /**
   * Handle click of dot element
   *
   * @param  {number} index Index of slide to go to
   */
  handleClickDots = index => {
    const { activeIndex } = this.state;

    // If current slide do nothing
    if (activeIndex === index) {
      return;
    }

    // Determine direction for transition
    const direction = activeIndex > index ? DIRECTION_LEFT : DIRECTION_RIGHT;

    if (!this.state.busy) {
      this._changeSlide(direction, index);
    }
  };

  /**
   * Handler for mouse enter event
   */
  handleMouseEnter = () => {
    if (this.props.autoplay) {
      this._stopAutoplay();
    }
  };

  /**
   * Handler for mouse leave event
   */
  handleMouseLeave = () => {
    if (this.props.autoplay) {
      this._startAutoplay();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={CAROUSEL_CLASS}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <CarouselSlides {...this.state} duration={this.props.duration}>
          {children}
        </CarouselSlides>
        {this.props.nav && (
          <CarouselNav
            onClickNav={this.handleClickNav}
            nextText={this.props.nextText}
            prevText={this.props.prevText}
          />
        )}
        {this.props.dots && (
          <CarouselDots
            count={children.length}
            activeIndex={this.state.activeIndex}
            onClickDots={this.handleClickDots}
          />
        )}
      </div>
    );
  }

  /**
   * Start loop using setInterval and store reference to interval ID
   */
  _startAutoplay = () => {
    this._intervalId = setInterval(() => {
      this._changeSlide(DIRECTION_RIGHT);
    }, this.props.interval);
  };

  /**
   * Reset loop
   */
  _resetAutoplay = () => {
    this._stopAutoplay();
    this._startAutoplay();
  };

  /**
   * Stop loop by using clearInterval on stored interval ID
   */
  _stopAutoplay = () => {
    clearInterval(this._intervalId);
  };

  /**
   * Change slide
   *
   * - Determine next slide based on direction
   * - Determine in/out animation classes based on direction
   * - Call beforeChange/afterChange handlers
   * - Update state with activeIndex/nextIndex values
   * - Update state after transition duration
   *
   * @param  {string} direction Direction constant
   * @param  {number} index     Optional index to jump to
   */
  _changeSlide(direction, index) {
    const nextIndex = index >= 0 ? index : this._getNextIndex(direction);
    const outClass =
      direction === DIRECTION_RIGHT
        ? this.props.animateOut
        : getOppositeAnimation(this.props.animateOut);
    const inClass =
      direction === DIRECTION_RIGHT
        ? this.props.animateIn
        : getOppositeAnimation(this.props.animateIn);

    if (typeof this.props.beforeChange === 'function') {
      this.props.beforeChange();
    }

    this.setState({
      ...this.state,
      busy: true,
      nextIndex,
      inClass,
      outClass,
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        activeIndex: nextIndex,
        nextIndex: null,
        busy: false,
      });

      this._resetAutoplay();

      if (typeof this.props.afterChange === 'function') {
        this.props.afterChange();
      }
    }, this.props.duration);
  }

  /**
   * Get next index based on direction
   *
   * @param  {string} direction Direction constant
   * @return {number}           Index
   */
  _getNextIndex(direction) {
    const { activeIndex } = this.state;
    const { children } = this.props;
    const delta = direction === DIRECTION_LEFT ? -1 : 1;
    const childIndex = (activeIndex + delta) % children.length;

    return childIndex === -1 ? children.length - 1 : childIndex;
  }
}
