import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart,setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    const handaleaddtocart=(product)=>{
        
        // console.log(product);

        const newcart=[...cart,product];
        setCart(newcart);
        console.log(newcart);
    }

    return (
        <div className='shop-caontainer'>
            <div className="products-container">
                 {/* <h2>Products Coming Here: {products.length}</h2> */}
                 {
                    products.map(product=><Product handaleaddtocart={handaleaddtocart} product={product} key={product.id}></Product>)
                 }



            </div>

            <div className="cart-container">
                <h4>Order Summary</h4>
                <h6>Selected items: {cart.length} </h6>
            </div>
            
        </div>
    );
};

export default Shop;