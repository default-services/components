import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import setClassName from 'utilities/setClassName';

// TODO: update to class-based component for CRL to work properly
export const PaginationList = props => {
  const { results = 10 } = props;
  const [ currentResultsPage, setCurrentResultsPage ] = useState(0);

  // All changed in useEffect, so grouped together
  const [ pages, setPages ] = useState({
    active: false,
    offsetHeight: 0,
    list: {}
  });

  // Reference to current page
  const currentPage = pages.list[currentResultsPage];

  // List provided by user
  const userList = useRef(PaginationList);
  const UserList = providedListProps => {

    // Filter out unneeded props before they are passed to the <ul>
    const defaultListProps = (() => {
      const output = { ...props };
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
          Object.keys(pages.list).map((page, index) => {
            const handlePageChange = () => setCurrentResultsPage(index);

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


  useEffect(() => {

    // Separate pages into corresponding arrays within an object
    const resultPages = props.children.reduce((accumulator, child, index) => {
      const current = Math.floor(index / results);
      accumulator[current] ? accumulator[current] = [ accumulator[current], child] : accumulator[current] = child;
      return accumulator;
    }, {});

    const offsetHeight = userList.current.offsetHeight;
    if(offsetHeight > 0 && !pages.active)
      setPages({
        ...pages,
        offsetHeight,
        active: true,
        list: resultPages
      });

    else
      setPages({ ...pages, list: resultPages });

  }, [userList.current.offsetHeight]);


  return (
    <section className={ setClassName(props, 'pagination-list') }>
      <UserList style={ { minHeight: pages.offsetHeight } } />
      <PageOptions />
    </section>
  );

};


PaginationList.propTypes = {
  list: PropTypes.array,
  results: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};