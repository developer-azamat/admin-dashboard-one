import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = ({ f_diagram }) => {
	const categories = Object.keys(f_diagram)
	const values = Object.values(f_diagram)

	const options = {
		chart: {
			type: 'column',
			options3d: {
				enabled: true,
				alpha: 15,
				beta: 15,
				depth: 50,
				viewDistance: 25,
			},
		},
		title: {
			text: 'Filial Diagram',
		},
		xAxis: {
			categories: categories,
		},
		yAxis: {
			title: {
				text: 'Value',
			},
		},
		zAxis: {
			title: {
				text: 'Depth',
			},
		},
		plotOptions: {
			column: {
				depth: 25,
			},
		},
		series: [
			{
				name: 'Qiymatlar',
				data: values,
			},
		],
	}

	return (
		<div className='w-[50%] '>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}

export default Chart
