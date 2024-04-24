import logo from '/logo.png'
import './Header.css'

import { NavLink } from 'react-router-dom'


function Header() {

	return (

		<header className='header' id="top">

			<div></div>

			<div className='logo'>
			<NavLink to="/"><img src={logo} /></NavLink>
			</div>

			<nav>
				<ul>
					<li>
						<NavLink to="/">Login</NavLink>
					</li>
				</ul>
			</nav>




		</header>

	)
}


export default Header