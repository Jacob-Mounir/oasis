import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addProduct, getProducts } from '../data/crud.js'

const AddProduct = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [occupation, setOccupation] = useState('')
	const setProducts = useStore(state => state.setProducts)

	const handleSubmit = async (event) => {
		// skapa ett objekt för ny Product
		// lägg till i databasen
		// hämta listan med anställda igen

		setIsLoading(true)
		event.preventDefault()
		const newProduct = { name: name, occupation: occupation }
		// TODO: meddela användaren att vi väntar på databasen - visa spinner t.ex.
		try {
			await addProduct(newProduct)
			setName('')
			setOccupation('')
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
				<label> Name </label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>

			<section className="column">
				<label> Occupation </label>
				<input type="text"
					value={occupation}
					onChange={e => setOccupation(e.target.value)}
					/>
			</section>

			<button
				disabled={isLoading}
				onClick={handleSubmit} type="submit"> Register </button>
			</form>
		</section>
	)
}

export default AddProduct


