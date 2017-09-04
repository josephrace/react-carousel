import * as utils from '../src/utils';

describe('getOppositeAnimation', () => {
  it('should replace Up with Down', () => {
    const a = 'slideUp';
    const b = 'slideDown';
    expect(utils.getOppositeAnimation(a)).toEqual(b);
  });

  it('should replace Down with Up', () => {
    const a = 'slideDown';
    const b = 'slideUp';
    expect(utils.getOppositeAnimation(a)).toEqual(b);
  });

  it('should replace Left with Right', () => {
    const a = 'slideLeft';
    const b = 'slideRight';
    expect(utils.getOppositeAnimation(a)).toEqual(b);
  });

  it('should replace Right with Left', () => {
    const a = 'slideRight';
    const b = 'slideLeft';
    expect(utils.getOppositeAnimation(a)).toEqual(b);
  });
});
