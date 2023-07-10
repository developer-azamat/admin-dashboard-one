const helperDate = {
	nowDate(start_date){
		const date_start = new Date(start_date)
		const day = date_start.getDay()
		const month = date_start.getMonth()
		const year = date_start.getFullYear()

		return `${year}-${month}-${day}`
	},
}

export default helperDate