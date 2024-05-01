import React, { useEffect, useState } from 'react';
import { useStore } from '../../data/store.js';
import { getProducts } from '../../data/crud.js';
import './shop.css';

const ShopGrid = () => {
	const { addToCart } = useStore(state => ({
		addToCart: state.addToCart
	}));

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProductsLocal] = useState([]);
	const [sortField, setSortField] = useState('name');
	const [sortOrder, setSortOrder] = useState('ascending');
	const [searchQuery, setSearchQuery] = useState('');

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const fetchedProducts = await getProducts();
			setProductsLocal([...fetchedProducts]);
		} catch (error) {
			setError('Failed to fetch products');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value.toLowerCase());
	};

	const toggleSortField = () => {
		setSortField(sortField === 'name' ? 'price' : 'name');
	};

	const toggleSortOrder = () => {
		setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
	};

	const filteredProducts = products.filter(product =>
		product.title.toLowerCase().includes(searchQuery) ||
		product.desc.toLowerCase().includes(searchQuery)
	);

	const sortedProducts = filteredProducts.sort((a, b) => {
		if (sortField === 'name') {
			return sortOrder === 'ascending' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
		} else if (sortField === 'price') {
			return sortOrder === 'ascending' ? a.price - b.price : b.price - a.price;
		}
		return 0;
	});

	return (
		<>
			<section className="shopSection">
				<div className="sorting-controls">
					<span onClick={toggleSortField}>Sort by <span className='order-name'>{sortField.charAt(0).toUpperCase() + sortField.slice(1)}</span> </span>
					<span className={sortOrder === 'ascending' ? 'sort-arrow active' : 'sort-arrow inactive'} onClick={() => setSortOrder('ascending')}>
						▲
					</span>
					<span className={sortOrder === 'descending' ? 'sort-arrow active' : 'sort-arrow inactive'} onClick={() => setSortOrder('descending')}>
						▼
					</span>
				</div>
				<input
					type="text"
					placeholder="Search products..."
					value={searchQuery}
					onChange={handleSearchChange}
					className="search-bar"
				/>
				{loading ? (
					<p>Loading products...</p>
				) : error ? (
					<p>{error}</p>
				) : sortedProducts.length > 0 ? (
					<div className="shop-grid">
						{sortedProducts.map((product, index) => (
							<div className='shop-container' key={product.id || index}>
								<img src={product.imageURL} alt={product.title} />
								<div className="overlay">
									<div className='shop-info-container'>
										<div className='shop-info'>
											<h2 className='shop-title'>{product.title}</h2>
											<p>{product.desc}</p>
											<div className='button-row'>
												<h2>${product.price}</h2>
												<button className='add-btn' onClick={() => addToCart(product)}>Add</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<p>No products available.</p>
				)}
			</section>
		</>
	);
}

export default ShopGrid;
