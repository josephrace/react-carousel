/**
 * Replaces Up/Down/Left/Right in string with opposite value
 *
 * @param  {string} animation Original animation CSS class
 * @return {string}           Opposite animation CSS class
 */
export function getOppositeAnimation(animation) {
  if (animation.includes('Up')) {
    return animation.replace(/Up/i, 'Down');
  }

  if (animation.includes('Down')) {
    return animation.replace(/Down/i, 'Up');
  }

  if (animation.includes('Left')) {
    return animation.replace(/Left/i, 'Right');
  }

  if (animation.includes('Right')) {
    return animation.replace(/Right/i, 'Left');
  }

  return animation;
}
