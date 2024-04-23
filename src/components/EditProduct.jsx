import { useState } from 'react'
import { editProduct, getProducts } from '../data/crud.js'
import { useStore } from '../data/store.js'

const EditProduct = ({ Product, whenEditDone }) => {
	const [disableButton, setDisableButton] = useState(false)
	const [name, setName] = useState(Product.name)
	const [occupation, setOccupation] = useState(Product.occupation)
	const setProducts = useStore(state => state.setProducts)

	const handleSave = async () => {
		// 0. stäng av formuläret så användaren inte kan skicka igen
		// 1. anropa funktionen editProduct i crud.js
		// 2. hämta ändringarna från db med getProducts i crud.js
		// 3. anropa setProducts i store.js
		// 4. anropa whenEditDone så att vi stänger formuläret

		setDisableButton(true)
		const updatedProduct = { name, occupation }
		await editProduct(Product.key, updatedProduct)
		const updatedList = await getProducts()
		setProducts(updatedList)
		whenEditDone()
	}

	return (
		<>
		<section className="change-Info">
			<section className="name-change">
				<label>Name</label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>
			<section className="occ-change">
				<label>Occupation</label>
				<input type="text"
					value={occupation}
					onChange={e => setOccupation(e.target.value)}
					/>
			</section>
		</section>
		<button disabled={disableButton} onClick={handleSave}> 💾 </button>
		</>
	)
}

export default EditProduct
