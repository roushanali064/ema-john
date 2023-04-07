import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


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

                ></Cart>
            </div>
        </div>
    );
};

export default Order;