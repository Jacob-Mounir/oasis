import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import './Header.css';
import { useStore } from '../../data/store.js';




function Header() {


	function CartIcon() {
		const cartCount = useStore(state => state.cart.reduce((count, item) => count + item.quantity, 0));

		return (
			<div className="cart-icon-container">
				{cartCount > 0 && <div className="cart-counter">{cartCount}</div>}
			</div>
		);
	}



	return (
		<header className='header' id="top">


			<div>
				<NavLink to="/cart"><CartIcon /></NavLink>
			</div>

			<div className='logo'>
				<NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
			</div>

			<div></div>


			<div className='splash-menu'>
				<div className='link-container'>
					<NavLink to="/">OASIS</NavLink>
					<NavLink to="/cart">Shopping Cart</NavLink>
					<NavLink to="/login">Log In</NavLink>
				</div>
			</div>


		</header>
	);
}

export default Header;
