import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../Providers/AuthProviders';

const SignUp = () => {

    const [error, setError] = useState('')
    const [success, setSuccess]= useState('')
    const { createUser } = useContext(userContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        setSuccess('')

        if (password !== confirm) {
            setError('your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be six characters or longer')
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must be one uppercase')
            return
        }

        createUser(email, password)
        .then(res=>{
            const loggedUser = res.user;
            console.log(loggedUser)
            setError('')
            setSuccess('user create successfully')
            form.reset()
        })
        .catch(error=>{
            setError(error.message)
            setSuccess('')
        })

        console.log(email, password, confirm);

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Enter Your Email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Enter Your Password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Conform Password</label>
                        <input type="password" name="confirm" placeholder='confirm Your Password' required />
                    </div>
                    <p className='text-error'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <p className='toggle'><small>Already have an account?    </small><Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;