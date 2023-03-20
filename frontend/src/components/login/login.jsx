import { useNavigate } from 'react-router-dom';
import './login.scss'

import loginImg from './login-img.png'

const LoginSection = () => {
    const navigate = useNavigate()
    return (  
        <div className='loginSection'>
             <div className='login-content'>
                <div className='login-text'>
                    <h1 className='text-primary'>
                        Welcome to Grade<br></br>Analyzer
                    </h1>
                    <p>Visualise Semester wise student score</p>
                    <div className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <p className="label-text-alt link link-hover">
                            Show password
                            </p>
                        </label>
                        </div>
                        <div className="form-control">
                        <button className="btn btn-primary" 
                            onClick={() => navigate('/admin')}>
                            Login
                        </button>
                        </div>
                    </div>
                </div>
                <div className="login-img">
                    <img src={loginImg} alt="login" />
                </div>
            </div>
        </div>
    );
}

export default LoginSection;