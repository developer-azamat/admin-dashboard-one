import Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'
import StatisticFilialData from './StatisticFilialData'
import Chart from '../main-info/Chart'


const Statistics = () => {
	const [start_date, setStart_date] = useState()
	const [end_date, setEnd_date] = useState()
	const [id, setId] = useState(1)
	const [options, setOptions] = useState({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
		},
		title: {
			text: "<span class='text-lg' style='color:blue; margin-bottom:10px; letter-spacing: 1px; font-family: system-ui;'>Mahsulotlar</span>",
			align: 'right',
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		},
		accessibility: {
			point: {
				valueSuffix: '%',
			},
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
				},
				showInLegend: true,
			},
		},
		series: [
			{
				name: 'Mahsulotlar',
				colorByPoint: true,
				data: [
					{
						name: 'Product 1',
						y: 45.77,
						sliced: true,
						selected: true,
					},
					{
						name: 'Product 2',
						y: 12.82,
					},
					{
						name: 'Product 3',
						y: 4.63,
					},
					{
						name: 'Product 4',
						y: 5.44,
					},
					{
						name: 'Product 5',
						y: 2.02,
					},
					{
						name: 'Other products',
						y: 3.28,
					},
				],
			},
		],
	})

	const [data, setData] = useState(
		JSON.parse(localStorage.getItem('total'))
			? JSON.parse(localStorage.getItem('total'))
			: null
	)
	const [diagram, setDiagram] = useState({})
	useEffect(() => {
		const stats = JSON.parse(localStorage.getItem('total'))
		setData(stats)
		if(data){
		const newData = { ...data.mahsulot_diagram }
		const newDiagram = { ...data.filial_diagram }
		setDiagram(newDiagram)

		console.log(diagram, newDiagram)
		
		let keys = []
		for (let key in newData) {
			keys.push({ name: key, y: newData[key] })
		}

		setOptions({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
			},
			title: {
				text: "<span class='text-lg' style='color:blue; margin-bottom:10px; letter-spacing: 1px; font-family: system-ui;'>Mahsulotlar</span>",
				align: 'right',
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
			},
			accessibility: {
				point: {
					valueSuffix: '%',
				},
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: false,
					},
					showInLegend: true,
				},
			},
			series: [
				{
					name: 'Mahsulotlar',
					colorByPoint: true,
					data: keys
				},
			],
		})
		}
	}, [])

	return (
		<div>
			<div className=' overflow-x-hidden w-[100%]  gap-2 border min-h-[500px] border-transparent'>
				{/* {diagram && <Chart filial_diagram={diagram} /> || <p>Loading...</p>} */}
				<div className='w-[50%]'>
					<HighchartsReact highcharts={Highcharts} options={options} />
				</div>
			</div>
			<StatisticFilialData />
		</div>
	)
}

export default Statistics
