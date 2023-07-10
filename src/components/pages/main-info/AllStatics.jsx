import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";


const newOptions = {
  chart: {
    type: "column",
  },
  title: {
    align: "left",
    text: "<span class='text-lg ' style='color:blue; margin-bottom:10px; letter-spacing: 1px; font-family: system-ui;'>Filial statistikasi</span>",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: ".",
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
        format: "{point.y:.1f}%",
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
      name: "Filial",
      colorByPoint: true,
      data: [
        {
          name: "Mart",
          y: 63.06,
          drilldown: "Mart",
        },
        {
          name: "Aprel",
          y: 19.84,
          drilldown: "Aprel",
        },
        {
          name: "May",
          y: 4.18,
          drilldown: "May",
        },
        {
          name: "Iyun",
          y: 4.12,
          drilldown: "Iyun",
        },
      ],
    },
  ],
  drilldown: {
    breadcrumbs: {
      position: {
        align: "right",
      },
    },
    series: [
     
    ],
  },
};

const AllStatics = ({data}) => {

  // products data 

  const newData = {...data.mahsulot_diagram}

  let keys = []
	for (let key in newData) {
		keys.push({ name: key, y: newData[key] })
	}
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
			enabled: false,
		},
		// accessibility: {
		//   point: {
		//     valueSuffix: "%",
		//   },
		// },

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
				data:keys
			},
		],
	}

  return <div className="flex overflow-x-hidden w-[100%] justify-between items-center gap-3 border min-h-[500px] px-9 border-transparent">
		{/* <HighchartsReact highcharts={Highcharts} options={newOptions} /> */}
		<HighchartsReact highcharts={Highcharts} options={options} />
	</div>;
};

export default AllStatics;
