import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products , setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const savedCarts = getStoredCart();
        const productKeys = Object.keys(savedCarts);
        const previousCart = productKeys.map(eKey =>{
            const product = fakeData.find(pd=>pd.key === eKey)
            product["quantity"] = savedCarts[eKey];
            return product; 
        })
       setCart(previousCart);
    },[])
 
    const addHandleProduct = (product)=>{
        const toBeAddedKey = product.key;
        let newCart
        const sameProduct = cart.find(pd =>pd.key === toBeAddedKey);
        if(sameProduct){
            sameProduct["quantity"] = sameProduct.quantity+1;
            const others = cart.filter(pd=>pd.key !==toBeAddedKey);
            newCart = [...others,sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
         setCart(newCart);
    addToDb(product.key);   
}
    return (
        <div className="shop-container">
            <div className="product-container">{
                products.map(pd => <Product showAddToCart ={true} product={pd} key={pd.key} addHandleProduct = {addHandleProduct}></Product>)
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
            <Link to ="/review">
                <button className="main-button">Review Order   </button>
            </Link>
            </Cart>
            </div>  
        </div>
    );
};

export default Shop;