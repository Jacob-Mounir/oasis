import { useState } from 'react'
import { editProduct, getProducts } from '../../data/crud.js'
import { useStore } from '../../data/store.js'

const EditProduct = ({ product, whenEditDone }) => {
	const [disableButton, setDisableButton] = useState(false)

	const setProducts = useStore(state => state.setProducts)
	const [title, setTitle] = useState(product.title)
	const [price, setPrice] = useState(product.price)
	const [desc, setDesc] = useState(product.desc)
	const [imageURL, setImageURL] = useState(product.imageURL)

	const handleSave = async () => {
		// 0. stäng av formuläret så användaren inte kan skicka igen
		// 1. anropa funktionen editProduct i crud.js
		// 2. hämta ändringarna från db med getProducts i crud.js
		// 3. anropa setProducts i store.js
		// 4. anropa whenEditDone så att vi stänger formuläret

		setDisableButton(true)
		const updatedProduct = { title, desc, imageURL, price }
		await editProduct(product.key, updatedProduct)
		const updatedList = await getProducts()
		setProducts(updatedList)
		whenEditDone()
	}

	return (
		<>
		<section className="edit-info">

			<form >

					<input type="text"
						value={price}
						className="bubble"
						onChange={e => setPrice(e.target.value)}
					/>


				<input type="text"
					value={title}
					className="bubble"
					onChange={e => setTitle(e.target.value)}
					/>

					<input type="text"
						value={desc}
						className="bubble"
						onChange={e => setDesc(e.target.value)}
					/>

					<input type="text"
						value={imageURL}
						className="bubble"
						onChange={e => setImageURL(e.target.value)}
					/>


			</form>





				<button disabled={disableButton} onClick={handleSave}> Save</button>
		</section>


		</>
	)
}

export default EditProduct
