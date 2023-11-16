import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart,setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    const handaleaddtocart=(product)=>{
        
        console.log(product);

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
                <Cart cart={cart}></Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;