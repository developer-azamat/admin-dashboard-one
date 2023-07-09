import axios from 'axios'
import { getItem } from '../../helpers/persistence-log'

const api_url = 'https://moneymanager.pythonanywhere.com'
const api = axios.create({
	baseURL: api_url,
})
api.interceptors.request.use(config => {
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MDk2OTMwLCJpYXQiOjE2ODg4Mzc3MzAsImp0aSI6ImZmMjVhZTUxZjBlNDQ5YzI4NzgyNzgyNWM3MDUzYTI1IiwidXNlcl9pZCI6MX0.ztTS_Yi72yhYDiOH3uhByxhMQd_Y83Mx3e6IT_dX8uM'
	const authorization = token ? `Bearer ${token}` : ""
	config.headers['Authorization'] = authorization
	return config
})
export default api
