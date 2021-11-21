import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happy from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(false);
    const handlePlaceOrder = ()=>{
        setCart([]);
        setOrder(true);
        clearTheCart();
    }
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey);
    }
    useEffect(()=>{
        const savedCart = getStoredCart();
        //console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find( pd => pd.key === key);
            product["quantity"] = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    },[])
    let thank;
    if(order){
        thank = <img src ={happy} alt=""/>;
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
               cart.map(pd =><ReviewItem product = {pd} removeProduct={removeProduct} key = {pd.key}></ReviewItem>)
            }
            {
            thank
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;