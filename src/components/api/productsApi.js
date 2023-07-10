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
	async getAllStats(db) {
		const { start_date, end_date, id } = db

		const data =
			await axios.get(`/stats/?start_date=${start_date}&end_date=${end_date}&ombor_id
=${id}`)
		return data
	}
}

export default productService
