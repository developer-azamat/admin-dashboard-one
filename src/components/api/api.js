import axios from 'axios'
import { getItem } from '../../helpers/persistence-log'

const api_url = 'https://moneymanager.pythonanywhere.com'
const api = axios.create({
	baseURL: api_url,
})
api.interceptors.request.use(config => {
	const token = getItem('token')
	const authorization = token ? `Bearer ${token}` : ""
	config.headers['Authorization'] = authorization
	return config
})
export default api
