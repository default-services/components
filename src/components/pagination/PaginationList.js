import React, { Component, createRef } from 'react';

import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';
import styles from 'src/components/pagination/PaginationList.module.scss';

/**
 * @namespace Pagination
 * @description Default styled pagination component.
 * @property {Array} children - Array of objects to make up pagination.
 * @property {number|string} results - How many results to show on each page.
 * @tutorial `src\stories\Pagination.stories.js`
 */

const getChildren = (props) => props.children.reduce((accumulator, child, index) => {
  const current = Math.floor(index / (props.results || 10));
  if (accumulator[current]) accumulator[current] = [ accumulator[current], child];
  else accumulator[current] = child;

  return accumulator;
}, {});

export class PaginationList extends Component {

  state = {
    active: false,
    currentPageNo: 0,
    list: getChildren(this.props),
    offsetHeight: 0,
    userList: createRef(PaginationList)
  };


  componentDidUpdate(prevProps) {
    const { props: { children, watch } } = this;
    // Old and new list keys
    const oldPropKeys = prevProps.children.map((child) => child.key);
    const newPropKeys = children.map((child) => child.key);

    // Old and new user watched properties
    const oldUserWatch = prevProps.watch;
    const newUserWatch = watch;

    // If keys changed
    if (JSON.stringify(oldPropKeys) !== JSON.stringify(newPropKeys)) { this.updateList(); }

    // If properties user wants to watch have changed, update list/state
    else if (oldUserWatch !== newUserWatch) { this.updateStateFromPropChild(); }

  }

  updateList = () => this.setState({
    currentPageNo: 0,
    list: getChildren(this.props)
  });

  updateStateFromPropChild = () => this.setState({
    list: getChildren(this.props)
  });

  render() {

    // Reference to current page
    const {
      state: {
        active,
        currentPageNo,
        list,
        userList
      }
    } = this;

    const currentPage = list[currentPageNo];

    // List provided by user
    const UserList = (providedListProps) => {

      // Filter out unneeded props before they are passed to the <ul>
      const defaultListProps = (() => {
        const output = { ...this.props };
        delete output.results;
        delete output.children;
        return output;
      })();

      return (
        <ul { ...defaultListProps } { ...providedListProps } ref={ userList }>
          { currentPage }
        </ul>
      );
    };


    // Numbered options to change the page
    const PageOptions = () => {

      return (
        <article>
          {
            Object.keys(list).map((page, index, array) => {
              const handlePageChange = () => {
                const { offsetHeight } = userList.current;

                if (offsetHeight > 0 && !active) { this.setState({
                  offsetHeight,
                  active: true,
                  currentPageNo: index
                }); }

                else { this.setState({ currentPageNo: index }); }
              };

              if (array.length > 1) {

                const cleanNumber = (() => {
                  if (array.length > 999) {
                    console.warn('PaginationList does not currently format numbers (e.g., adding leading zeros) for lists that contain over 1000 pages of results.');
                    return false;
                  }

                  if (array.length > 9 && index < 9) return `0${index + 1}`;

                  if (array.length > 99 && index < 9) return `00${index + 1}`;

                  if (array.length > 99 && index >= 9 && index < 99) return `0${index + 1}`;

                  return `${index + 1}`;
                })();

                return (
                  <span
                    key={ index }
                    onClick={ handlePageChange }
                    data-active={ currentPageNo === index }
                    role="list"
                  >
                    { cleanNumber }
                  </span>
                );
              }

              return false;

            })
          }
        </article>
      );
    };


    return (
      <section className={ setClassName(this.props, styles['pagination-list']) } page={ currentPageNo + 1 }>
        <UserList style={ { minHeight: this.state.offsetHeight } } />
        <PageOptions />
      </section>
    );

  }
}

PaginationList.propTypes = {
  children: PropTypes.array,
  results: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  watch: PropTypes.any
};

PaginationList.defaultProps = {
  children: [],
  results: '',
  watch: null
};