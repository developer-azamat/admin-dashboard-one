import axios from './api'

const productService = {
	async getWhareHouses (){
		const data = await axios.get('/main/omborlar/')
		return data
	},
	async setWhareHouse (filial){
		const data = await axios.post('/main/omborlar/'
		,
		{...filial})
		return data
 	}
}

export default productService
