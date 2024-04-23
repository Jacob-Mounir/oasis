import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite'
import { db } from './fire.js'


const collectionName = 'products'
const collectionRef = collection(db, collectionName)


async function getProducts() {
	// Skapa en referens till collection "products" i databasen
	const productCollection = collection(db, collectionName)

	// Hämta alla dokument i collection "products"
	const productSnapshot = await getDocs(productCollection)
	console.log('getProducts: snapshot is', productSnapshot)


	const productList = productSnapshot.docs.map(doc => withKey(doc))
	return productList
}

// Use this ivf you don't have an id in the objects themselves
function withKey(doc) {
	let o = doc.data()
	o.key = doc.id  // "id" is the document reference
	return o
}

async function addProduct(product) {
	// referens till collection 'products'
	await addDoc(collectionRef, product)
}

async function deleteProduct(key) {
	const docRef = doc(collectionRef, key)
	// console.log('deleteProduct: ', docRef);
	deleteDoc(docRef)
}

async function editProduct(key, updatedProduct) {
	// vi behöver en "collection reference"
	// vi skapar en referens till dokumentet vi ska ändra på
	// leta upp en funktion som kan uppdatera ett dokument
	const docRef = doc(collectionRef, key)

	// Två alternativ för att ändra:
	// updateDoc - uppdaterar ett befintligt objekt
	// setDoc - uppdaterar eller skapar ett objekt
	await updateDoc(docRef, updatedProduct)
}


export { getProducts, addProduct, deleteProduct, editProduct }
