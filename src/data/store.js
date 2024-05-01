import { create } from 'zustand'

const useStore = create((set) => ({
	products: [],
	cart: [],

	// Method to update products
	setProducts: (newProducts) => set({ products: newProducts }),

	// Add a product to the cart
	addToCart: (product) => set((state) => {
		console.log("Current cart before adding:", state.cart);
		const cartItemIndex = state.cart.findIndex((item) => item.id === product.id);
		const newCart = state.cart.slice(); // Always create a new array to avoid mutating state

		if (cartItemIndex !== -1) {
			// Product exists, increase quantity
			newCart[cartItemIndex] = {
				...newCart[cartItemIndex],
				quantity: newCart[cartItemIndex].quantity + 1,
			};
		} else {
			// Product does not exist, add new entry with quantity 1
			newCart.push({ ...product, quantity: 1 });
		}

		console.log("Updated cart after adding:", newCart);
		return { cart: newCart };
	}),

	// Remove a product from the cart
	removeFromCart: (productId) => set((state) => ({
		cart: state.cart.filter((item) => item.id !== productId)
	})),

	// Decrease the quantity of a product in the cart
	decreaseQuantity: (productId) => set((state) => {
		const newCart = state.cart.map((item) => {
			if (item.id === productId && item.quantity > 1) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		});

		// Optionally remove item from cart if quantity is 0
		return {
			cart: newCart.filter((item) => item.quantity > 0),
		};
	}),
}));

export { useStore }
