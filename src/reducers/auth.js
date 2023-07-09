import { createSlice } from '@reduxjs/toolkit'
import { removeItem, setItem } from '../helpers/persistence-log'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true
		},
		signUserSuccess: (state, action) => {
			;(state.isLoading = false),
				(state.user = action.payload),
				(state.loggedIn = true),
				setItem('token', action.payload.access)
		},
		getUserDetails: (state, action) => {
			state.user = action.payload
			state.isLoading = false
			state.loggedIn = true
		},
		signUserFailure: (state, action) => {
			;(state.isLoading = false), (state.error = action.payload)
		},
		logOutUser: state => {
			;(state.isLoading = false), (state.user = null), (state.loggedIn = false)
			removeItem('token')
		},
	},
})

export const {
	logOutUser,
	signUserStart,
	signUserSuccess,
	getUserDetails,
	signUserFailure,
} = authSlice.actions

export default authSlice.reducer
