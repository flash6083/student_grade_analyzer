import './addStudent.scss'

const AddStudent = () => {
    return (
        <div className='add-student-section'>
            <h1>Add Student Detail</h1>
            <div className='student-inputs'>
                <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-md" />
                <input type="text" placeholder="Roll No" className="input input-bordered input-info w-full max-w-md" />
                <div className='year-select'>
                    <select className="select select-bordered w-full max-w-md">
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                    </select>
                </div>
            </div>
            <div className='sem-input'>
                <input type="number" min="1" max="10" placeholder="Sem 1 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 2 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 3 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 4 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 5 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 6 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 7 SGPA" className="input input-bordered input-info w-full max-w-md" />
                <input type="number" min="1" max="10" placeholder="Sem 8 SGPA" className="input input-bordered input-info w-full max-w-md" />
            </div>

            <div className='buttons'>
                <button className="btn btn-warning btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    CANCEL
                </button>
                <button className="btn btn-primary btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    ADD
                </button>
            </div>
        </div>
    );
}
 
export default AddStudent;