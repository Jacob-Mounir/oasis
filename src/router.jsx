// In router.jsx
import { createBrowserRouter, Route } from 'react-router-dom';
import Root from './components/Root.jsx';

import Cart from './components/ShoppingCart/Cart.jsx';
import EditPage from './components/EditPage.jsx';
import LandingPage from './components/LandingPage.jsx';
LandingPage
import Login from './components/Login/Login.jsx'; // Justera sökvägen efter behov

// import NotFoundPage from './components/NotFoundPage.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [

			{ path: "/cart",
			element: <Cart /> }
		,
			{ path: "/edit",
			element: <EditPage /> }
		,

		{ path: "/login", element: <Login /> },


			{ path: "/",
			element: <LandingPage /> }

			]	// errorElement: <NotFoundPage />
	}
]);

export { router };
