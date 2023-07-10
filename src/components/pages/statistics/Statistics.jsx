import Highcharts from 'highcharts'
import { HighchartsReact } from 'highcharts-react-official'
import React, { useState } from 'react'
import StatisticFilialData from './StatisticFilialData'

const options = {
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
}

const newOptions = {
	chart: {
		type: 'column',
	},
	title: {
		align: 'left',
		text: "<span class='text-lg ' style='color:blue; margin-bottom:10px; letter-spacing: 1px; font-family: system-ui;'>Filial statistikasi</span>",
	},
	accessibility: {
		announceNewData: {
			enabled: true,
		},
	},
	xAxis: {
		type: 'category',
	},
	yAxis: {
		title: {
			text: '.',
		},
	},
	legend: {
		enabled: false,
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true,
				format: '{point.y:.1f}%',
			},
		},
	},

	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat:
			'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
	},

	series: [
		{
			name: 'Filial',
			colorByPoint: true,
			data: [
				{
					name: 'Mart',
					y: 63.06,
					drilldown: 'Mart',
				},
				{
					name: 'Aprel',
					y: 19.84,
					drilldown: 'Aprel',
				},
				{
					name: 'May',
					y: 4.18,
					drilldown: 'May',
				},
				{
					name: 'Iyun',
					y: 4.12,
					drilldown: 'Iyun',
				},
			],
		},
	],
	drilldown: {
		breadcrumbs: {
			position: {
				align: 'right',
			},
		},
		series: [],
	},
}

const Statistics = () => {
	const [start_date, setStart_date] = useState()
	const [end_date, setEnd_date] = useState()
	const [id, setId] = useState(1)

	const [data, setData] = useState(null)

	const getStats = async e => {
		e.preventDefault()
		const starting = helperDate.nowDate(start_date)
		const ending = helperDate.nowDate(end_date)

		const db = {
			start_date: '2023-05-07',
			end_date: '2023-07-07',
			id: id,
		}
		const { data } = await productService.getAllStats(db)

		setData(data)
		console.log(data)
	}
	if (data) {
		const newData = { ...data.mahsulot_diagram }

		let keys = []
		for (let key in newData) {
			keys.push({ name: key, y: newData[key] })
		}
	}
	return (
		<div>
			<form
				className='flex px-3 py-2 border justify-between gap-2'
				onSubmit={getStats}
			>
				<input
					type='date'
					required
					className='bg-transparent'
					placeholder='start_date'
					onChange={e => setStart_date(e.target.value)}
				/>
				<input
					type='date'
					required
					placeholder='end_date'
					className='bg-transparent'
					onChange={e => setEnd_date(e.target.value)}
				/>
				<select
					className='bg-transparent'
					onChange={e => setId(e.target.value)}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
				</select>
				<input
					type='submit'
					className='bg-red-600 text-white p-2 rounded-md hover:bg-red-300 duration-300 cursor-pointer'
				/>
			</form>
			<div className='flex overflow-x-hidden w-[100%] justify-between items-center gap-2 border min-h-[500px] border-transparent'>
				<HighchartsReact highcharts={Highcharts} options={newOptions} />;
				<HighchartsReact highcharts={Highcharts} options={options} />;
			</div>
			<StatisticFilialData />
		</div>
	)
}

export default Statistics
