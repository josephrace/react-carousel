import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlides from '../src/CarouselSlides';

describe('<CarouselSlides />', () => {
  it('renders without crashing', () => {
    const children = [];
    shallow(
      <CarouselSlides
        children={children}
        activeIndex={0}
        duration={500}
        inClass=""
        outClass=""
      />
    );
  });
});
