import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
        BarElement, Title, Tooltip, Legend} 
from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';

import './chart.scss'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, BarElement, 
                    Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'SGPA Analysis',
      },
    },
    scales:{
        y: {
            type: 'linear',
            min: 0,
            max: 10
        }
    }
}


const Chart = ({labels, marks}) => {

    const data = {
        labels,
        datasets: [
            {
                label: 'Sem SGPA',
                data: marks,
                borderColor: 'rgba(255, 0, 132, 0.8)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }
    return(
        <div className='chart-section'>
            <Bar options={options} data={data} />
            <Line options={options} data={data} />
        </div>
        
    )
}

export default Chart