import { useState } from 'react'
import { useStore } from '../../data/store.js'
import { addProduct, getProducts } from '../../data/crud.js'
import './form.css'


const AddProduct = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [desc, setDesc] = useState('')
	const [imageURL, setImageURL] = useState('')

	const setProducts = useStore(state => state.setProducts)

	const handleSubmit = async (event) => {
		// skapa ett objekt för ny Product
		// lägg till i databasen
		// hämta listan med anställda igen

		setIsLoading(true)
		event.preventDefault()
		const newProduct = { title: title, desc: desc, imageURL: imageURL, price: price }
		// TODO: meddela användaren att vi väntar på databasen - visa spinner t.ex.
		try {
			await addProduct(newProduct)
			setTitle('')
			setDesc('')
			setImageURL('')
			setPrice('')
			setProducts(await getProducts())
		} catch {
			// TODO: visa felmeddelande för användaren

		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section>
			<form className="form">
			<h3> Register a new Product </h3>

			<section className="column">
				<input type="text"
					className="bubble"
					placeholder='Title'
					value={title}
					onChange={e => setTitle(e.target.value)}
					/>
			</section>

			<section className="column">
				<input type="text"
					className="bubble-desc"
					placeholder='Description'
					value={desc}
					onChange={e => setDesc(e.target.value)}
					/>
			</section>

			<section className="column">
				<input type="text"
					className="bubble"
					placeholder='Image URL'
					value={imageURL}
					onChange={e => setImageURL(e.target.value)}
					/>
			</section>

			<section className="column">
				<input type="number"
					className="bubble"
					placeholder='$'
					value={price}
					onChange={e => setPrice(e.target.value)}
					/>
			</section>

			</form>

			<button
				className='btn-filled'
				disabled={isLoading}
				onClick={handleSubmit} type="submit"> Add
			</button>
			
		</section>
	)
}

export default AddProduct


