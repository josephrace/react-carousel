import React from 'react';
import { shallow } from 'enzyme';
import CarouselNav from '../src/CarouselNav';

describe('<CarouselNav />', () => {
  it('renders without crashing', () => {
    const onClickNav = jest.fn();
    shallow(<CarouselNav onClickNav={onClickNav} nextText="" prevText="" />);
  });
});
