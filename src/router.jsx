// In router.jsx
import { createBrowserRouter, Route } from 'react-router-dom';
import Root from './components/Root.jsx';

import Landing from './components/Landing.jsx'
// import NotFoundPage from './components/NotFoundPage.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [

			{ path: "/", element: <Landing /> }
		],
		// errorElement: <NotFoundPage />
	}
]);

export { router };
