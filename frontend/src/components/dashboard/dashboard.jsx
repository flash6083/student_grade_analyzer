import { useNavigate } from 'react-router-dom';
import StudentTable from '../table/table';

import './dashboard.scss'

const DashboardSection = () => {
  const navigate = useNavigate()
  return ( 
      <div className='dashboard'>
        <div className='dash-content'>

          <div className='dash-text'>
            <h1>Welcome Admin,</h1>
            <p className='text-customGray'>Visualise student sgpa batchwise</p>
          </div>

          <button className="btn btn-primary" onClick={()=> navigate('/add-student')}>Add Student</button>
        </div>
      
      <StudentTable/>
        
      </div>
  );
}

export default DashboardSection;