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
	async setCash(post) {
		const data = await axios.post(`/cash/sotuvlar/`, {
			...post,
		})
		return data
	},

	async getWorkers() {
		const data = await axios.get(`/user/xodimlar/`);

		return data
	},

	async setWorkers(workers) {
		console.log(workers);
		const data = await axios.post(`/user/xodimlar/`, {
			...workers
		});
		return data
	},


	async getArchiveProducts() {
		const data = await axios.get(`/main/mahsulotlar/archive/`)
		return data
	},

	async getArchiveWorkers() {
		const data = await axios.get(`/user/xodimlar/archive/`);

		return data
	},

	async getArchiveWarehouses() {
		const data = await axios.get(`/main/omborlar/archive/`);

		return data
	},
	async getStats() {
		const data = await axios.get(`/stats/`)

		return data
	},
	async WorkersMore(id) {
		const data = await axios.get(`/user/xodim/${id}/`)

		return data
	},

	async WorkersRemove(id) {
		await axios.delete(`/user/xodim/${id}/`)
	},

	async WhareHouseMore(id) {
		const data = await axios.get(`/main/ombor/${id}/`)

		return data
	},

	async WhareHouseRemove(id) {
		await axios.delete(`/main/ombor/${id}/`)
	},

	async cashDelete(id) {
		await axios.delete(`/main/ombor/cash-delete/${id}/`)
	}
}

export default authService
