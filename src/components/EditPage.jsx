// import { useState } from 'react'
import AddProduct from './EditProducts/AddProduct'
import Products from './EditProducts/Products.jsx'
import Header from './Header/Header.jsx'
import { NavLink } from 'react-router-dom'

function EditPage() {


	return (
		<div>
			<Header />
			<AddProduct />
			<Products />
		</div>
	)
}

export default EditPage