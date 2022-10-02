import React from 'react';
import propTypes from 'prop-types';
import Title from './Title';
import Price from './Price';
import Quantity from './Quantity';

function Listing(prop) {
  const { items } = prop;
  return (
    <div className='item-list'>
      {items.map((el) => {
        return(
          <div className='item' key={el.listing_id}>
            <div className='item-image'>
              <a href={el.url}>
                <img src={el.MainImage.url_570xN} alt='pic'/>
              </a>
            </div>
            <div className='item-details'>
              <Title title={el.title}/>
              <Price name={el.currency_code} price={el.price}/>
              <Quantity quant={el.quantity}/>
            </div>
          </div> 
        )
      })}
    </div> 
  )
}

Listing.propTypes = {
  items: propTypes.array
}

export default Listing;
