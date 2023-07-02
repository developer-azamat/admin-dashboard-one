import axios from './api'

const authService = {
	async userLogin(user) {
		const data = await axios.post('/user/token/', { ...user })
		return data
	},
	async getWhareHouses() {
		const data = await axios.get('/main/omborlar/')
		return data
	},

	async getUser() {
		const data = await axios.get('/user/xodim/details/')
		return data
	},
	async getProducts() {
		const data = await axios.get("/main/mahsulotlar/")
		return data
	}
}

export default authService
