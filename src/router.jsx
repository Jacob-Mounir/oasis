// In router.jsx
import { createBrowserRouter, Route } from 'react-router-dom';
import Root from './components/Root.jsx';

import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx';
import EditPage from './components/EditPage.jsx';
import LandingPage from './components/LandingPage.jsx';
LandingPage
// import NotFoundPage from './components/NotFoundPage.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [

			{ path: "/cart",
			element: <ShoppingCart /> }
		,
			{ path: "/edit",
			element: <EditPage /> }
		,


			{ path: "/",
			element: <LandingPage /> }

			]	// errorElement: <NotFoundPage />
	}
]);

export { router };
