import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    // console.log(props.product);

    const {img,name,seller,ratings,quantity,price}= props.product;
    
    const handaleaddtocart=props.handaleaddtocart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
            <h6 className='name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Menufacturer: {seller}</p>
            <p>Ratings: {ratings} Stars</p>

            {/* <h3>This is a product</h3> */}
          </div>

          <button onClick={()=>{handaleaddtocart(props.product)}} className='button'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            
        </div>
    );
};

export default Product;