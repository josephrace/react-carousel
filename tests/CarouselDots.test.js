import React from 'react';
import { shallow } from 'enzyme';
import CarouselDots from '../src/CarouselDots';

describe('<CarouselDots />', () => {
  it('renders without crashing', () => {
    const onClickDots = jest.fn();
    shallow(<CarouselDots onClickDots={onClickDots} />);
  });
});
