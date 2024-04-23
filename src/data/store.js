import { create } from 'zustand'

// set, create

const useStore = create(set => ({
	products: [],

	setProducts: newProduct => set(state => ({
		products: newProduct
	})),
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

	addProducts: product => set(state => ({
		products: [ ...state.products, product ]
	}))
}))


export { useStore }
