import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className='w-75 mx-auto'>
                <form className='w-50 mx-auto'>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required />
                    </div>
                    <button className='btn btn-link fs-5 mb-2'>Forgot Password?</button>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Accept terms and conditions</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;