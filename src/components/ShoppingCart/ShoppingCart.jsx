import React from 'react';
import { useStore } from '../../data/store.js';
import { NavLink } from 'react-router-dom';

import Header from '../Header/Header.jsx';


const ShoppingCart = () => {
	const { cart, addToCart, removeFromCart, decreaseQuantity } = useStore(state => ({
		cart: state.cart,
		addToCart: state.addToCart,
		removeFromCart: state.removeFromCart,
		decreaseQuantity: state.decreaseQuantity
	}));

	const calculateTotal = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};
	console.log('Cart State:', cart);
	return (
		<>
		<Header/>
		<div className="shopping-cart">
			<h2>Shopping Cart</h2>
			{cart.length > 0 ? (
				<div>
					{cart.map((item, index) => (
						<div key={index} className="cart-item">
							<img src={item.imageURL} alt={item.title} style={{ width: "100px" }} />
							<div>
								<h4>{item.title}</h4>
								<p>${item.price}</p>
								<p>Quantity: {item.quantity}</p>
								<button onClick={() => addToCart(item)}>+</button>
								<button onClick={() => decreaseQuantity(item.id)}>-</button>
								<button onClick={() => removeFromCart(item.id)}>Remove</button>
							</div>
						</div>
					))}
					<h3>Total: ${calculateTotal()}</h3>
				</div>
			) : (
				<p>Your cart is empty.</p>
			)}
		</div>
		</>
	);
};

export default ShoppingCart;