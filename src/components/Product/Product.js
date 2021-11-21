import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3 className="product-name"><NavLink to={"/product/"+key}>{name}</NavLink></h3> 
            <br />
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br />
            <p><small>Only {stock} left in stock - Order soon</small></p>
            {props.showAddToCart &&
                <button className="main-button" onClick= {()=> props.addHandleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            }
            </div>
        </div>
    );
};

export default Product;