import { deleteProduct, getProducts } from "../data/crud.js"
import { useStore } from '../data/store.js'
import { useState } from 'react'
import EditProduct from './EditProduct.jsx'

const ViewProducts = ({ product }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const setProducts = useStore(state => state.setProducts)

	const handleFire = async () => {
		// anropa deleteProduct
		// uppdatera listan, två alternativ:
		// 1a. använd getProducts för att få en ny lista och
		// 1b. anropa setProducts för att uppdatera store
		// 1c. React uppdaterar komponenten med alla anställda
		// 2. "fuska" - ta bort anställd från listan via Zustand

		setIsLoading(true)
		await deleteProduct(product.key)
		const productsFromDb = await getProducts()
		setProducts(productsFromDb)
		setIsLoading(false)
	}

	return (
		<section className="row border-bottom alternate">
			{isEditing ? (
				<EditProduct
					product={product}
					whenEditDone={() => setIsEditing(false)} />
			) : (
				<>
				<div className="flex-grow"> {product.name} works as {product.occupation}. </div>
				<button onClick={() => setIsEditing(true)}> 🖊️ </button>
				<button disabled={isLoading} onClick={handleFire}> Fire </button>
				</>
			)}
		</section>
	)
}

export default ViewProducts;


