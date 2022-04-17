import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='container-fluid mt-5'>
            <div className='w-75 mx-auto'>
                <form className='w-50 mx-auto' onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder='Enter email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required />
                    </div>
                    <button className='btn btn-link fs-5 mb-2'>Forgot Password?</button> <br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;