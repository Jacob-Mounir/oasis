import { create } from 'zustand'

const useStore = create((set, get) => ({
	products: [],
	cart: JSON.parse(localStorage.getItem('cart')) || [],  // Läser befintlig varukorg från localStorage

	isLoggedIn: false,
	setIsLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),

	setProducts: (newProducts) => set({ products: newProducts }),

	addToCart: (product) => set((state) => {
		const cartItemIndex = state.cart.findIndex((item) => item.id === product.id);
		const newCart = state.cart.slice();

		if (cartItemIndex !== -1) {
			newCart[cartItemIndex] = {
				...newCart[cartItemIndex],
				quantity: newCart[cartItemIndex].quantity + 1,
			};
		} else {
			newCart.push({ ...product, quantity: 1 });
		}

		localStorage.setItem('cart', JSON.stringify(newCart));  // Sparar den uppdaterade varukorgen i localStorage
		return { cart: newCart };
	}),

	decreaseQuantity: (productId) => set((state) => {
		const newCart = state.cart.map((item) => {
			if (item.id === productId && item.quantity > 0) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		}).filter(item => item.quantity > 0);  // Filtrera bort objekt med kvantitet 0

		localStorage.setItem('cart', JSON.stringify(newCart));
		return { cart: newCart };
	}),

}));

export { useStore }
