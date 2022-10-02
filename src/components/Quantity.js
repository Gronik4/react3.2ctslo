import React from 'react';
import propTypes from 'prop-types';

export default function Quantity(prop) {
  const { quant } = prop;
  let styleQuantity = '';
  if(quant <= 10) {
    styleQuantity = 'item-quantity level-low';
  } else {
    if(quant <= 20) {styleQuantity = 'item-quantity level-medium';} else {styleQuantity = 'item-quantity level-high';}
  }
  return <p className={styleQuantity}>{quant} left</p>
}

Quantity.propTypes = {
  quant: propTypes.number.isRequired
}
