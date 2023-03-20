import { useState } from 'react';
import TableDetail from '../table-detail/table-detail';

import './table.scss'
const StudentTable = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return ( 
        <div className='student-table-section'>
            <div className='student-table'>
                <p>Student Details Table</p>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Search Student</span>
                    </label>
                    <input type="text" 
                        placeholder="Enter Student Roll" 
                        className="input input-bordered w-full max-w-xs" 
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <select className="select select-bordered w-32 max-w-fit">
                    <option defaultValue={'All'}>All</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                </select>
            </div>

            <TableDetail search={searchTerm}/>

        </div>
    );
}

export default StudentTable;