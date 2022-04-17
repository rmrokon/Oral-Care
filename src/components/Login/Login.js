import { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password);

    }

    if (user) {
        navigate('/');
    }

    const handleSendPassResetMail = async () => {
        await sendPasswordResetEmail(email);
        toast("Email Sent");
    }

    return (
        <div className='container-fluid mt-5'>
            <div className='w-75 mx-auto'>
                <form className='w-50 mx-auto' onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input onBlur={handleEmail} type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder='Enter email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required />
                    </div>
                    <button onClick={handleSendPassResetMail} className='btn btn-link fs-5 mb-2'>Forgot Password?</button> <br />
                    <p className='text-danger'>{error && error.message} {passResetError && passResetError.message}</p>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
    );
};

export default Login;