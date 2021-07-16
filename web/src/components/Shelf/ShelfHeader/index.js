import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';
import './style.scss';

const ShelfHeader = props => {
  return (
    <div className="shelf-container-header">
      <small className="logo">
        {/* <span>{props.productsLength} Product(s) found.</span> */}
        <span className="logo">{props.logo}</span>
      </small>
      {/* <Sort /> */}
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
