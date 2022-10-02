import React from 'react';
import propTypes from 'prop-types';

export default function Price(prop) {
  const {name, price} = prop;
  let currency;
  switch(name) {
    case 'USD' :
      currency = `$${price}`;
      break;
    case 'EUR' :
      currency = `€${price}`;
      break;
    default:
      currency = `${price}${name}`;
  }
  return <p className='item-price'>{currency}</p>;
}

Price.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.string.isRequired
}
