import axios from './api'

const productService = {
	async getWhareHouses() {
		const data = await axios.get('/main/omborlar/')
		return data
	},
	async setWhareHouse(filial) {
		const data = await axios.post('/main/omborlar/', { ...filial })
		return data
	},
	async getAllStats(db) {
		const { start_date, end_date, id } = db

		const data =
			await axios.get(`/stats/?start_date=${start_date}&end_date=${end_date}&ombor_id
=${id}`)
		return data
	},
	async setCash(cash) {
		const data = await axios.post('/cash/sotuvlar/', { ...cash })
		return data
	},
	async CashMore(id) {
		const data = await axios.get(`/cash/sotuv/${id}/`)

		return data
	},
	async CashRemove(id) {
		await axios.delete(`/cash/sotuv/${id}/`)
	},
	async getTarqatmalar () {
		const data = await axios.get('/main/xodim/mahsulot_tarqatishlar/')

		return data
	},
	async updateProfileUser (user){
		const data = await axios.put('/user/xodim/details/', {...user})
		return data
	},
	async getProductsXodim () {
		const data = await axios.get('/main/xodim/mahsulotlar/')

		return data
	}
}

export default productService
