import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const removeFromCart = (id) => {
        const remainingCart = cart.filter(product => product.id !== id)
        setCart(remainingCart)
        removeFromDb(id)

    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <Review
                        key={product.id}
                        product={product}
                        removeFromCart={removeFromCart}
                    ></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}

                >
                    <Link to='/checkout'>
                        <button className='checkout-btn'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;