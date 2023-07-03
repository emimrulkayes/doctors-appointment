import React, { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const {signIn} = useContext(AuthContext);
    const [ loginError, setLoginError ] = useState('');

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
            setLoginError(error.message);
        });
    }

    return (
        <div className='h-[600px] flex justify-center items-center my-20'>
            <div className=' p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-3xl font-bold mb-6 text-black text-center'> Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Email:</span></label>
                        <input {...register("email", {required: "Email Address is required"})} name='email' type="email" className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className='mt-3 form-control w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Password:</span></label>
                        <input {...register("password", {required: "Password is required", minLength: {value: 6, message: "Password must be 6 characters or longer."}})} type='password' className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs flex flex-row justify-between items-center'>
                        <label className="label"><span className="label-text text-gray-400 font-normal">Forget password?</span></label>
                        <a href='#top' className="link link-accent text-secondary">Reset password</a>
                    </div>
                    <input type="submit" value="Login" className="btn text-white w-full mt-3" />
                    <div>{ loginError && <p className='text-red-600'> {loginError} </p> }</div>
                </form>
                <p className='font-normal text-gray-400 text-sm mt-1.5'>New to Doctors Bari? <Link className='text-secondary font-bold' to="/signup"> Create a new Account </Link> </p>
                <div className="divider text-gray-600">OR</div>
                <button className="btn btn-outline w-full text-gray-600 hover:bg-gray-600 hover:text-white">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;