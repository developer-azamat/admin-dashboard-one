import axios from './api'

const authService = {
	async userLogin(user) {
		const data = await axios.post('/user/token/', {...user})
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
		const data = await axios.get('/main/mahsulotlar/')
		return data
	},
	async setProducts(post) {
		const data = await axios.post('/main/mahsulotlar/', {
			...post,
		})
		return data
	},
	async productMore(id) {
		const data = await axios.get(`/main/mahsulot/${id}/`)

		return data
	},

	async removeProduct(id) {
		await axios.delete(`/main/mahsulot/${id}/`)
	},

	async getCash() {
		const cash = await axios.get('/cash/sotuvlar/')

		return cash
	},

	async sendCash(cash) {
		await axios.post('/cash/sotuvlar/',)
	},

	async getWorkers() {
		const data = await axios.get(`/user/xodimlar/`);

		return data
	},

	async setWorkers(workers) {
		const data = await axios.post(`/user/xodimlar/`, {
			...workers,
		});
		return data
	},
}

export default authService
