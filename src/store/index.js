import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducers/auth'

export default configureStore({
	reducer: authSlice,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

