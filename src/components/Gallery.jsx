import React, { useState } from 'react'
import img1 from '../assets/938230881.png'
import img2 from '../assets/Design Studio v.9.2017 by Leha342 136.jpg'
import img3 from '../assets/photo_2023-04-13_22-46-24.jpg'

const Gallery = () => {
	const [current, setCurrent] = useState(img1)

	function changeImgSource(imgSource) {
		setCurrent(imgSource)
	}
	return (
		<div>
			<div>
				<img
					src={current}
					style={{
						width: '100%',
						height: '70vh',
						objectFit: 'contain',
					}}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<img
					alt="image"
					onClick={e => changeImgSource(e.target.src)}
					src={img2}
					style={{
						width: '50%',
						height: '300px',
						objectFit: 'contain',
					}}
				/>
				<img
					onClick={e => changeImgSource(e.target.src)}
					src={img1}
					style={{
						width: '50%',
						height: '300px',
						objectFit: 'contain',
					}}
					alt='image'
				/>
				<img
					onClick={e => changeImgSource(e.target.src)}
					src={img3}
					style={{
						width: '50%',
						height: '300px',
						objectFit: 'contain',
					}}
					alt="image"
				/>
			</div>
		</div>
	)
}

export default Gallery
