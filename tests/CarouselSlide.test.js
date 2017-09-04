import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../src/CarouselSlide';

describe('<CarouselSlide />', () => {
  it('renders without crashing', () => {
    shallow(
      <CarouselSlide
        children={<div />}
        duration={500}
        animateIn=""
        animateOut=""
      />
    );
  });
});
