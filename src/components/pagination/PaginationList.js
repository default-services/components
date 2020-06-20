import React, { Component, createRef } from 'react';

import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

export class PaginationList extends Component {

  state = {
    active: false,
    currentResultsPage: 0,
    list: {},
    offsetHeight: 0,
    userList: createRef(PaginationList)
  };

  // TODO: change to "getDerivedStateFromProps"
  componentDidMount() {

    // Separate pages into corresponding arrays within an object
    const resultPages = this.props.children.reduce((accumulator, child, index) => {
      const current = Math.floor(index / (this.props.results || 10));
      accumulator[current] ? accumulator[current] = [ accumulator[current], child] : accumulator[current] = child;
      return accumulator;
    }, {});

    this.setState({ list: resultPages });
  };


  render() {

    // Reference to current page
    const currentPage = this.state.list[this.state.currentResultsPage];

    // List provided by user
    const UserList = providedListProps => {

      // Filter out unneeded props before they are passed to the <ul>
      const defaultListProps = (() => {
        const output = { ...this.props };
        delete output.results;
        delete output.children;
        return output;
      })();

      return (
        <ul { ...defaultListProps } { ...providedListProps } ref={ this.state.userList }>
          { currentPage }
        </ul>
      );
    };


    // Numbered options to change the page
    const PageOptions = () => {

      return (
        <article>
          {
            Object.keys(this.state.list).map((page, index) => {
              const handlePageChange = () => {
                const offsetHeight = this.state.userList.current.offsetHeight;

                if(offsetHeight > 0 && !this.state.active)
                  this.setState({
                    offsetHeight,
                    active: true,
                    currentResultsPage: index
                  });

                else
                  this.setState({ currentResultsPage: index });
              };

              return (
                <span key={ index } onClick={ handlePageChange }>
                  { index + 1 }
                </span>
              );
            })
          }
        </article>
      );
    };


    return (
      <section className={ setClassName(this.props, 'pagination-list') }>
        <UserList style={ { minHeight: this.state.offsetHeight } } />
        <PageOptions />
      </section>
    );

  };
}


PaginationList.propTypes = {
  list: PropTypes.array,
  results: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};