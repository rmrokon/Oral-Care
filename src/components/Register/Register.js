import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleAgree = () => {
        setAgree(!agree)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/');
    }

    if (user) {
        // navigate('/');
        console.log(user);
    }


    return (
        <div className='container my-5 p-5 border rounded-3 shadow-lg'>
            <div className='w-75 mx-auto'>
                <h3 className='titles text-center mb-3'>Register</h3>
                <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" name='name' className="form-control" placeholder='Your Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="email" name='email' className="form-control" placeholder='Your email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="form-control" placeholder='Choose a Password' required />
                    </div>
                    <button onClick={() => navigate('/login')} className='btn btn-link fs-5 mb-2'>Already have an account? Login</button>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={handleAgree} />
                        <label className="form-check-label">Accept terms and conditions</label>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!agree}>Register</button>
                </form>
            </div>
            <div className=''>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;