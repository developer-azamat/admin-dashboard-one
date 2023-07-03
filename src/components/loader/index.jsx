import React from 'react'
import "./loader.css"

function Loader() {
	return (
		<div className='fixed top-[50%] left-[50%] translate-[-50%] z-20'>
			<div className='loader'>
				<div className='loader__bar'></div>
				<div className='loader__bar'></div>
				<div className='loader__bar'></div>
				<div className='loader__bar'></div>
				<div className='loader__bar'></div>
				<div className='loader__ball'></div>
			</div>
		</div>
	)
}

export default Loader
