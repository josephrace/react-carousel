import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../src/Carousel';

describe('<Carousel />', () => {
  it('renders without crashing', () => {
    const children = [];
    shallow(<Carousel children={children} />);
  });
});
