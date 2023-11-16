import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts]= useState([]);
    const [cart,setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

   
   useEffect (()=>{
    const savedCart= [];
    const storedCart=getShoppingCart();
   
    //step-1 :get id
    for(const id in storedCart){

           
           //step 2: find the product by id
           const savedproduct=products.find(product=>product.id===id);
           if (savedproduct) {
            //step 3: quantity of product
            const quantity= storedCart[id];
            savedproduct.quantity=quantity;
            // console.log(savedproduct);
            savedCart.push(savedproduct);
        }
       }

       setCart(savedCart);

   },[products]);

    const handaleaddtocart=(product)=>{
        
        // console.log(product);

        const newcart=[...cart,product];
        setCart(newcart);
        // console.log(newcart);

        addToDb(product.id);
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