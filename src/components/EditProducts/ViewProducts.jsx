import { deleteProduct, getProducts } from "../../data/crud.js"
import { useStore } from '../../data/store.js'
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
		await deleteProduct(product.id)
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

				<div className="product-item">

					<div className="product-image">
						<img src={product.imageURL}/>
					</div>

					<div className="product-info">
						<h3>${product.price}</h3>
						<h1>{product.title}</h1>
						<p>{product.desc}</p>
					</div>


					<div className="edit-buttons">
						<button onClick={() => setIsEditing(true)}> Edit </button>
						<button disabled={isLoading} onClick={handleFire}> Delete </button>
					</div>

				</div>

				</>
			)}
		</section>
	)
}

export default ViewProducts;


