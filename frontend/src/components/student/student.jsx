import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chart from '../chart/chart';

import './student.scss'

const StudentSection = () => {
    const data = {
        "_id": "62f7925dfc0335663700d81f",
        "name": "Debayan Kundu",
        "roll_no": "13000220007",
        "batch": "2020-2024",
        "sem_sgpa": [
            9,
            9.2,
            9.1,
            9,
            8,
            4,
            5,
            10
        ]
    }

    const marks = data.sem_sgpa.filter(val => {
        if(val != 0)
            return val
    })

    const labels = []

    marks.forEach((item, index) => {
        labels.push(`Sem ${index+1}`)
    })

    const {id} = useParams()

    useEffect(() => {
        console.log(id)
    }, [id]);

    return ( 
        <div className='student-section'>
            <h1>Student Analytics</h1>
            <div className='student-nr'>
                <h3 className='text-primary'>Name : Sayak Bhattacharya</h3>
                <h3 className='text-primary'>Roll No : {id}</h3>
                <h3 className='text-primary'>Batch: 2020-2024</h3>
            </div>
            <div className='chart'>
                <Chart marks={marks} labels={labels}/>
            </div>
        </div>
    );
}

export default StudentSection;