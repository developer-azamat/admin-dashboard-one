import axios from './api'

const productService = {
	async getWhareHouses() {
		const data = await axios.get('/main/omborlar/')
		return data
	},
	async setWhareHouse(filial) {
		const data = await axios.post('/main/omborlar/'
			,
			{ ...filial })
		return data
	},
	async setCash(cash) {
		const data = await axios.post('/cash/sotuvlar/'
			,
			{ ...cash }
		)
		return data
	},
	async CashMore(id) {
		const data = await axios.get(`/cash/sotuv/${id}/`)

		return data
	},
	async CashRemove(id) {
		await axios.delete(`/cash/sotuv/${id}/`)
	},
}

export default productService
