const helperDate = {
	nowDate(start_date) {
		const arr = start_date.split('-')

		return arr.join('-')
		// const date_start = new Date(start_date)
		// const day = date_start.getDay()
		// const month = date_start.getMonth()
		// const year = date_start.getFullYear()

		// return `${year}-${month < 10 ? "0" + month : month}-${
		// 	day < 10 ? "0" + day : day
		// }`

		// return `${year}-${month}-${day}`
	},
	newDate() {
		const getDate = new Date()
		const year = getDate.getFullYear()
		const moth = getDate.getMonth()
		const month = moth + 1
		const day = getDate.getDate()

		return `${year}-${month < 10 ? '0' + month : month}-${
			day < 10 ? '0' + day : day
		}`
	},
	lastMonth() {
		
		const getDate = new Date()
		const year = getDate.getFullYear()
		const mont = getDate.getMonth() 
		const moth = mont == 0 ? 12 : mont -1

		const month = moth  + 1
		const day = getDate.getDate()

		return `${year}-${month < 10 ? '0' + month : month}-${
			day < 10 ? '0' + day : day
		}`
	}
}

export default helperDate