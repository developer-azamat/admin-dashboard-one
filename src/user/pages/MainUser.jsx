import React, { useEffect, useState } from 'react'
import Main from '../../components/pages/main-info/Main'
import authService from '../../components/api/axios'
import { getItem, setItem } from '../../helpers/persistence-log'
import Products from './Products'

const MainUser = () => {
	const profileData = async () => {
		try {
			const { data } = await authService.getUser()
			// setUser(data.details)
			setItem('ombor_id', data.details.ombor)
		} catch (error) {
			console.log(error)
		}
	}

	const [ombor_id, setOmbor] = useState(getItem("ombor_id"))


	useEffect(() => {
		profileData()
	}, [])

	return (
		<>
			<Main role='user' ombor_id={ombor_id} />
		</>
	)
}

export default MainUser
