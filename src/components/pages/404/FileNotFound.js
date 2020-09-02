import React, { Component } from 'react';

import setClassName from 'utilities/setClassName';

/**
 * @namespace FileNotFound
 * @description Default styled 404 page component.
 * @tutorial `src\stories\Pages.stories.js`.
 */

export class FileNotFound extends Component {
  state = {
    0: 0,
    1: 0,
    2: 0
  };

  componentDidMount() {
    const randomNum = () => {
      return Math.floor(Math.random() * 9) + 1;
    };

    const loopOne = setInterval(() => this.setState({ 0: randomNum() }), 30);
    const loopTwo = setInterval(() => this.setState({ 1: randomNum() }), 30);
    const loopThree = setInterval(() => this.setState({ 2: randomNum() }), 30);

    setTimeout(() => {
      const clearIt = (interval, digit, time, value) => {
        setTimeout(() => {
          clearInterval(interval);
          this.setState({ [digit]: value });
        }, time);
      };

      clearIt(loopOne, 0, 40, 4);
      clearIt(loopTwo, 1, 80, 0);
      clearIt(loopThree, 2, 100, 4);
    }, 1000);
  };

  render() {
    const { props, state: numbers } = this;
    return (
      <div className={ setClassName(props, 'file-not-found') }>
        <div>
          <div>
            <span>{numbers[2]}</span>
          </div>

          <div>
            <span>{numbers[1]}</span>
          </div>

          <div>
            <span>{numbers[2]}</span>
          </div>

          <h2>Page not found</h2>
        </div>
      </div>
    );
  }
};