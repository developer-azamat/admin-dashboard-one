import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "<span class='text-lg' style='color:blue; margin-bottom:10px; letter-spacing: 1px; font-family: system-ui;'>Mahsulotlar</span>",
    align: "right",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    enabled: false
  },
  // accessibility: {
  //   point: {
  //     valueSuffix: "%",
  //   },
  // },
  
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Mahsulotlar",
      colorByPoint: true,
      data: [
        {
          name: "Product 1",
          y: 45.77,
          sliced: true,
          selected: true,
        },
        {
          name: "Product 2",
          y: 12.82,
        },
        {
          name: "Product 3",
          y: 4.63,
        },
        {
          name: "Product 4",
          y: 5.44,
        },
        {
          name: "Product 5",
          y: 2.02,
        },
        {
          name: "Other products",
          y: 3.28,
        },
      ],
    },
  ],
};
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
      // {
      //   name: "Chrome",
      //   id: "Chrome",
      //   data: [
      //     ["v65.0", 0.1],
      //     ["v64.0", 1.3],
      //     ["v63.0", 53.02],
      //     ["v62.0", 1.4],
      //     ["v61.0", 0.88],
      //     ["v60.0", 0.56],
      //     ["v59.0", 0.45],
      //     ["v58.0", 0.49],
      //     ["v57.0", 0.32],
      //     ["v56.0", 0.29],
      //     ["v55.0", 0.79],
      //     ["v54.0", 0.18],
      //     ["v51.0", 0.13],
      //     ["v49.0", 2.16],
      //     ["v48.0", 0.13],
      //     ["v47.0", 0.11],
      //     ["v43.0", 0.17],
      //     ["v29.0", 0.26],
      //   ],
      // },
      // {
      //   name: "Firefox",
      //   id: "Firefox",
      //   data: [
      //     ["v58.0", 1.02],
      //     ["v57.0", 7.36],
      //     ["v56.0", 0.35],
      //     ["v55.0", 0.11],
      //     ["v54.0", 0.1],
      //     ["v52.0", 0.95],
      //     ["v51.0", 0.15],
      //     ["v50.0", 0.1],
      //     ["v48.0", 0.31],
      //     ["v47.0", 0.12],
      //   ],
      // },
      // {
      //   name: "Internet Explorer",
      //   id: "Internet Explorer",
      //   data: [
      //     ["v11.0", 6.2],
      //     ["v10.0", 0.29],
      //     ["v9.0", 0.27],
      //     ["v8.0", 0.47],
      //   ],
      // },
      // {
      //   name: "Safari",
      //   id: "Safari",
      //   data: [
      //     ["v11.0", 3.39],
      //     ["v10.1", 0.96],
      //     ["v10.0", 0.36],
      //     ["v9.1", 0.54],
      //     ["v9.0", 0.13],
      //     ["v5.1", 0.2],
      //   ],
      // },
      // {
      //   name: "Edge",
      //   id: "Edge",
      //   data: [
      //     ["v16", 2.6],
      //     ["v15", 0.92],
      //     ["v14", 0.4],
      //     ["v13", 0.1],
      //   ],
      // },
      // {
      //   name: "Opera",
      //   id: "Opera",
      //   data: [
      //     ["v50.0", 0.96],
      //     ["v49.0", 0.82],
      //     ["v12.1", 0.14],
      //   ],
      // },
    ],
  },
};

const AllStatics = () => {
  return <div className="flex overflow-x-hidden w-[99%] justify-between items-center gap-3 border min-h-[500px] px-9 border-transparent">
		<HighchartsReact highcharts={Highcharts} options={newOptions} />
		<HighchartsReact highcharts={Highcharts} options={options} />
	</div>;
};

export default AllStatics;
