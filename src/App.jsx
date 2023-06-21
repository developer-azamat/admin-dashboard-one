import React from 'react'
import styles from "./assets/Home.module.css";
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts/highstock';
import Dashboard from "./components/Dashboard.jsx";


const App = () => {
    const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'My chart'
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            }
        ]
    };
  return (
    <div className={styles.container}>
        <Dashboard />
    </div>
  )
}

export default App