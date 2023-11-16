import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    // const {cart}= props;

    let total=0;
    let shipping=0;
    for(const product of cart){

        total=total+product.price;
        shipping=shipping+product.shipping;
    }

    const tax= total*(7/100);
    const grandtotal= total+shipping+tax;
    return (
        <div className='Cart'>
            <h4>Order Summary</h4>
            {/* <h6>Selected items: {props.cart.length} </h6> */}
            <div className='p'>
            <h6>Selected items: {cart.length} </h6>
            <p>Total Price: ${(total)}</p>
             <p>Shipping Cost: ${shipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h6>Grand Total: ${grandtotal}</h6>
            </div>
        </div>
    );
};

export default Cart;