import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from './';
import './carousel.scss';
import './examples.scss';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

class Examples extends Component {
  state = {
    chosenAnimation: 'zoom',
    extraAnimations: {
      zoom: { in: 'zoomIn', out: 'zoomOut' },
      rotate: { in: 'rotateIn', out: 'rotateOut' },
      speed: { in: 'lightSpeedIn', out: 'lightSpeedOut' },
      roll: { in: 'rollIn', out: 'rollOut' },
      bounce: { in: 'bounceIn', out: 'bounceOut' },
      flip: { in: 'flipInX', out: 'flipOutX' },
    },
  };

  handleSelectAnimation = event => {
    this.setState({
      ...this.state,
      chosenAnimation: event.target.value,
    });
  };

  render() {
    const { extraAnimations, chosenAnimation } = this.state;

    return (
      <div className="container">
        <header className="page-header">
          <h1>React Carousel</h1>
          <p>A simple, configurable React & CSS3 carousel component.</p>
        </header>
        <div className="example-section">
          <h2>Example 1: Default Configuration</h2>
          <Carousel>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </Carousel>
          <pre className="example-code">{`
            <Carousel>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </Carousel>
          `}</pre>
        </div>
        <div className="example-section">
          <h2>Example 2: Dots & Fade Animation</h2>
          <Carousel dots={true} animateIn="fadeIn" animateOut="fadeOut">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </Carousel>
          <pre className="example-code">{`
            <Carousel dots={true} animateIn='fadeIn' animateOut='fadeOut'>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </Carousel>
          `}</pre>
        </div>
        <div className="example-section">
          <h2>Example 3: Before/After Functions</h2>
          <Carousel
            beforeChange={() => {
              console.log('Example 3: Before change');
            }}
            afterChange={() => {
              console.log('Example 3: After change');
            }}
          >
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </Carousel>
          <pre className="example-code">{`
            <Carousel
              beforeChange={() => { console.log('Example 3: Before change') }}
              afterChange={() => { console.log('Example 3: After change') }}
            >
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </Carousel>
          `}</pre>
        </div>
        <div className="example-section">
          <h2>Example 4: Lazy Load Images</h2>
          <Carousel>
            <img data-src={img4} alt="" />
            <img data-src={img5} alt="" />
            <img data-src={img6} alt="" />
          </Carousel>
          <pre className="example-code">{`
            <Carousel>
              <img data-src={img4} alt="" />
              <img data-src={img5} alt="" />
              <img data-src={img6} alt="" />
            </Carousel>
          `}</pre>
        </div>
        <div className="example-section">
          <h2>Example 5: Extra animations</h2>
          <p>
            This component has been designed to support animations from the
            popular{' '}
            <a href="https://daneden.github.io/animate.css/">
              Animate.css
            </a>{' '}
            library.
          </p>
          <p>
            The accompanying CSS file includes slideIn/slideOut and
            fadeIn/fadeOut animations, but if you add Animate.css to your page
            you can use any of its CSS classes as animateIn/animateOut props
            (some work better than others!).
          </p>
          <p>
            Try a few:{' '}
            <select
              value={chosenAnimation}
              onChange={this.handleSelectAnimation}
            >
              {Object.keys(extraAnimations).map((key, index) => (
                <option key={key} value={key}>
                  {extraAnimations[key].in}/{extraAnimations[key].out}
                </option>
              ))}
            </select>
          </p>
          <Carousel
            animateIn={extraAnimations[chosenAnimation].in}
            animateOut={extraAnimations[chosenAnimation].out}
          >
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </Carousel>
          <pre className="example-code">{`
            <Carousel
              animateIn='${extraAnimations[chosenAnimation].in}'
              animateOut='${extraAnimations[chosenAnimation].out}'
            >
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </Carousel>
          `}</pre>
        </div>
        <div className="example-section">
          <h2>Default Configuration</h2>
          <p>
            All of the following can be configured via the Carousel component's
            props.
          </p>
          <pre className="example-code">{`
            {
              interval: 3000,
              duration: 500,
              animateIn: 'slideInRight',
              animateOut: 'slideOutLeft',
              nextText: 'Next',
              prevText: 'Prev',
              autoplay: true,
              nav: true,
              dots: false,
              beforeChange: () => {},
              afterChange: () => {}
            }
          `}</pre>
        </div>
        <footer className="page-footer">
          Made by <a href="http://josephrace.co.uk/">Joseph Race</a>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('app'));
