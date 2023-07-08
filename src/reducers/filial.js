import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	data: null,
	error: null,
}

export const filialSlice = createSlice({
	name: 'filial',
	initialState,
	reducers: {
		startFilials: state => {
			state.isLoading = true
		},
		filialsSuccess: (state, action) => {
			;(state.isLoading = false), (state.data = action.payload)
		},
		filialsFailure: (state, action) => {
			;(state.isLoading = false), (state.error = action.payload)
		},
	},
})

export const { filialsFailure, filialsSuccess, startFilials } =
	filialSlice.actions

export default filialSlice.reducer
