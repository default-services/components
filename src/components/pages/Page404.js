import React, { Component } from 'react';

import './Page404.scss';

export class Page404 extends Component {
  state = {
    selector1: 0,
    selector2: 0,
    selector3: 0
  };

  componentDidMount() {
    const randomNum = () => {
      return Math.floor(Math.random() * 9) + 1;
    };

    let loop1,
      loop2,
      loop3,
      time = 30,
      i = 0;
    loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        this.setState({ selector3: 4 });
      } else {
        this.setState({ selector3: randomNum() });
        i++;
      }
    }, time);
    loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        this.setState({ selector2: 0 });
      } else {
        this.setState({ selector2: randomNum() });
        i++;
      }
    }, time);
    loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        this.setState({ selector1: 4 });
      } else {
        this.setState({ selector1: randomNum() });
        i++;
      }
    }, time);
  }

  render() {
    return (
      <div className="error">
        <div className="col-xs-12 ground-color text-center">
          <div className="container-error-404">
            <div className="clip">
              <div className="shadow"><span className="digit thirdDigit">{this.state.selector3}</span></div>
            </div>
            <div className="clip">
              <div className="shadow"><span className="digit secondDigit">{this.state.selector2}</span></div>
            </div>
            <div className="clip">
              <div className="shadow"><span className="digit firstDigit">{this.state.selector1}</span></div>
            </div>
          </div>
          <h2 className="h1">Page not found</h2>
        </div>
      </div>
    );
  }
};
