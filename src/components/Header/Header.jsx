import logo from '/logo.png'
import './Header.css'

import { NavLink } from 'react-router-dom'


function Header() {

	return (

		<header className='header' id="top">

		<div></div>


			<div className='logo'>
			<img src={logo} />
			</div>



			<div className='splash-menu'>

				<div className='link-container'>
					<NavLink to="/">OASIS</NavLink>
					<NavLink to="/edit">Edit</NavLink>
					<NavLink to="/cart">Shopping Cart</NavLink>
				</div>

			</div>


			<div></div>

		</header>

	)
}


export default Header