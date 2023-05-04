import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../Providers/AuthProviders';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn } = useContext(userContext)

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                setError('')
                setSuccess('log in successfully')
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setSuccess('')
                setError(error.message)
            })

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? 'text' : 'password'} name="password" id="" placeholder='Enter Your Password' required />
                        <p className='password-toggle' onClick={()=>setShow(!show)}>
                            <small>
                                {
                                    show ? <small>Hide Password</small> : <small>Show Password</small>
                                }
                            </small>
                        </p>
                    </div>
                    <p className='text-error'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <p className='toggle'><small>New to Ema-john? </small><Link to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;