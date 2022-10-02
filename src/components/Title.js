import React from 'react';
import propTypes from 'prop-types';

export default function Title(prop) {
  const { title } = prop;
  let result;
  if(title.length < 51) {
    result = title;
  } else {
    result = `${title.slice(0, 51)}...`;
  }
  return <p className='item-title'>{result}</p>
}

Title.propTypes = {
  title: propTypes.string.isRequired
}
