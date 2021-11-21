import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total + prd.price*prd.quantity,0);
    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    }
    else if(totalPrice>15){
        shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping = 12.99;
    }
    const tax = (totalPrice*0.1).toFixed(2 );
    return (
        <div>
          <h4>Order Summary</h4>
          <p>Item Ordered: {cart.length}</p> 
          <p>Product Price: {parseFloat(totalPrice).toFixed(2)}</p>
          <p><small>Shipping price: {shipping}</small></p>
          <p><small> TAX + VAT: {tax}</small></p>
          <p>Total Price: {totalPrice+shipping+parseFloat(tax)}</p>
          {
            props.children
          }
          
        </div>
    );
};

export default Cart;