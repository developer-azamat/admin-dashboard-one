import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	products: [],
	error: null,
}

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		getProductsStarted: state => {
			state.isLoading = true
		},
		getProductsSuccess: (state, action) => {
			state.isLoading = false
			state.products = action.payload
		},
		getProductsFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { getProductsFailure, getProductsStarted, getProductsSuccess } =
	productSlice.actions

export default productSlice.reducer