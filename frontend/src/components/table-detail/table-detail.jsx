import { useNavigate } from 'react-router-dom';

import './table-detail.scss'

const data = [
    {
        "_id": "62f7925dfc0335663700d81f",
        "name": "Debayan Kundu",
        "roll_no": "13000220007",
        "batch": "2020-2024",
        "sem_sgpa": [
            9,
            9.2,
            9.1,
            9,
            0,
            0,
            0,
            0
        ]
    },
    {
        "_id": "62f79297fc0335663700d821",
        "name": "Sayak Bhattacharya",
        "roll_no": "13000220009",
        "batch": "2020-2024",
        "sem_sgpa": [
            9.7,
            9.5,
            9.6,
            9.5,
            0,
            0,
            0,
            0
        ]
    },
    {
        "_id": "62f78e8319607c71463fa81d",
        "name": "Soumik Poddar",
        "roll_no": "13000220010",
        "batch": "2020-2024",
        "sem_sgpa": [
            9.5,
            9.4,
            9.3,
            9.2,
            0,
            0,
            0,
            0
        ]
    },
    {
        "_id": "62f7895cfc0335663700d81b",
        "name": "Souvik Mondal",
        "roll_no": "13000220011",
        "batch": "2020-2024",
        "sem_sgpa": [
            9.34,
            9.12,
            8.76,
            8.25,
            0,
            0,
            0,
            0
        ]
    }
]


const TableDetail = ({search}) => {
    var navigate = useNavigate()

    const handleClick = (student) => {
        navigate(`/student/${student.roll_no}`)
    }
    return ( 
        <div className="overflow-x-auto">
        <table className="table table-compact w-full">
            <thead>
            <tr>
                <th></th> 
                <th>Name</th> 
                <th>Roll No</th> 
                <th>Batch</th> 
                <th>Modify / Delete</th> 
            </tr>
            </thead> 
            <tbody>

            {data.filter(val => {
                if (search === '')
                    return val
                else if(val.roll_no.includes(search))
                    return val
                else if(val.name.includes(search))
                    return val
            }).map((student,index) => {
                return(
                    <tr key={student._id} className='hover cursor-pointer'
                        onClick={() => handleClick(student)}
                    >
                        <th className='text-base'>{index+1}</th>
                        <td className='text-base'>{student.name}</td>
                        <td className='text-base'>{student.roll_no}</td>
                        <td className='text-base'>{student.batch}</td>
                        <td>
                            <span className='text-base mr-10 hover:link-hover'>Edit</span>
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </td>
                    </tr>
                )      
            })}
            
            </tbody> 
        </table>
        </div>
    );
}

export default TableDetail;