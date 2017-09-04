# React Carousel

A simple, configurable React & CSS3 carousel component.

Demo: [https://josephrace.github.io/react-carousel/](https://josephrace.github.io/react-carousel/)

## Initial Aims

- [x] React `<Carousel />` component to display gallery of images in carousel format
- [x] Individual elements of carousel UI broken into separate, functional components
- [x] Next/Prev links to navigate forwards and backwards navigation through images
- [x] "Dot" buttons to support navigating to a particular image
- [x] Expose configuration options to user via `<Carousel />` props
- [x] Transitions using CSS3 and `translate3d` where possible for hardware-accelerated performance
- [x] Auto-looping
- [x] Development and build configuration with [Webpack](https://webpack.js.org/)
- [x] Test environment with [Jest](https://facebook.github.io/jest/)

## Implementation

Before starting I looked at various existing carousel libraries such as [Bootstrap's Carousel](https://getbootstrap.com/docs/4.0/components/carousel/), [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) and [Slick Carousel](https://kenwheeler.github.io/slick/) to get ideas of what might be core features and what could be nice extras.  During the project setup I took inspiration from projects such as [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate) for my Webpack configuration.

The `<Carousel />` component manages the state for the carousel and defines all methods for handling interaction and updating the state.  It is the only "container" or "stateful" component.  All others are "presentational" or "pure" - they do not contain any state and receive data and callbacks via props.  Images or other components can be nested inside the `<Carousel>` component and they will be wrapped and rendered inside `<CarouselSlide />` components to provided the control needed for managing slides.

CSS3 animations are used for the transitions because they are optimised by browsers for performance (e.g. `translate3d` uses hardware acceleration) and they allow me to express the transition start and end states in a simple manner.  I also designed the carousel to support additional animations by dropping in the popular [Animate.css](https://github.com/daneden/animate.css) library.

## Future Development

Given more time I would like to:

- [ ] Increase test coverage
- [ ] Improve lazy load implementation to pre-fetch images before transition
- [ ] Support more interactions e.g. drag/swipe
- [ ] Improve Webpack configuration (see [Authoring Libraries](https://webpack.js.org/guides/author-libraries/))
- [ ] Integrate with Travis CI
- [ ] Publish to npm

## Usage

Wrap your images inside the `<Carousel />` component.  Configuration options can be passed as props.

```
<Carousel
  dots={true}
  interval={3000}
>
  <img src={img1} alt="" />
  <img src={img2} alt="" />
  <img src={img3} alt="" />
</Carousel>
```

### Options

Property | Type | Default | Description
-------- | ---- | ------- | -----------
interval | number | 3000 | Time between slide transitions
duration | number | 500 | Duration of transition
animateIn | string | 'slideInRight' | CSS class of incoming transition
animateOut | string | 'slideOutLeft' | CSS class of outgoing transition
nextText | string | 'Next' | Text to display for next element
prevText | string | 'Prev' | Text to display for prev element
autoplay | boolean | true | Should carousel autoplay
nav | boolean | true | Should nav next/prev be displayed
dots | boolean | false | Should dots elements be displayed
beforeChange | function | undefined | Function to call before transition
afterChange | function | undefined | Function to call after transition

## Examples

Demo: [https://josephrace.github.io/react-carousel/](https://josephrace.github.io/react-carousel/)
