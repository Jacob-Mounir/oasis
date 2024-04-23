import React, { useEffect, useState } from 'react';
import { getProducts } from '../data/crud.js';
import { useStore } from '../data/store.js';
import ViewProducts from './ViewProducts.jsx';

const Products = () => {
	const { products, setProducts } = useStore(state => ({
		products: state.products || [],
		setProducts: state.setProducts
	}));

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleGetProducts = async () => {
		try {
			setLoading(true);
			const fetchedProducts = await getProducts();
			setProducts(fetchedProducts);
		} catch (error) {
			setError('Failed to fetch products');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		handleGetProducts();
	}, []);

	return (
		<div>
			<h2>Our Products</h2>
			<div>
				<button onClick={handleGetProducts}>Refresh Products</button>
			</div>
			{loading ? (
				<p>Loading products...</p>
			) : error ? (
				<p>{error}</p>
			) : products.length > 0 ? (
				products.map(product => <ViewProducts key={product.key} product={product} />)
			) : (
				<p>No products available.</p>
			)}
		</div>
	);
};

export default Products;
