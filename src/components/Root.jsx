import { useState } from 'react'
import './Root.css'

import { Outlet } from "react-router-dom"

const Root = () => (
	<div className="app">

		<main>
			<Outlet />
		</main>
	</div>

)

export default Root