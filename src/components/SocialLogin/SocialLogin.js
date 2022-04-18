import './SocialLogin.css';
import Google from '../../images/Social/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png';
import Facebook from '../../images/Social/facebook.png';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook();
    }

    if (googleUser || facebookUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container bg-light'>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div className='line-div' />
                <span className='or mx-3'>Or</span>
                <div className='line-div' />
            </div>
            <p className='text-danger text-center fs-5'>{googleError && googleError.message} {facebookError && facebookError.message}</p>
            <div className='container'>
                <div className='row justify-content-center w-50 mx-auto align-items-center'>
                    <div className='col-12 col-md-6 text-end my-3'>
                        <button onClick={handleGoogleSignIn} className='border-0 btn btn-info me-2 w-100'>
                            <img style={{ width: '50px', height: '50px' }} src={Google} alt="" />
                            <span>Sign in with google</span>
                        </button>
                    </div>
                    <div className='col-12 col-md-6 text-start'>
                        <button onClick={handleFacebookSignIn} className='border-0 btn btn-info w-100'>
                            <img style={{ width: '50px', height: '50px' }} src={Facebook} alt="" />
                            <span>Sign in with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;