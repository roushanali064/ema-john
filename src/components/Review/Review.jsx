import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Review = ({ product, removeFromCart }) => {
    const { id, name, img, price, quantity } = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='review-title'>{name}</p>
                <p>Price: <span className="orange-text">${price}</span></p>
                <p>Quantity: <span className="orange-text">{quantity}</span></p>
            </div>
            <button onClick={()=>removeFromCart(id)} className='btn-remove'><FontAwesomeIcon className='remove-icon' icon={faTrash} /></button>
        </div>
    );
};

export default Review;