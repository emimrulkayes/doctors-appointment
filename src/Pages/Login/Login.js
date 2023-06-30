import React from 'react';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const handleLogin = data => {
        console.log(data);
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
                    </div>
                    <div className='form-control w-full max-w-xs flex flex-row justify-between items-center'>
                        <label className="label"><span className="label-text text-gray-400 font-normal">Forget password?</span></label>
                        <a href='#top' className="link link-accent text-secondary">Reset password</a>
                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <br />
                    <input type="submit" value="Login" className="btn text-white w-full" />
                </form>
                <p className='font-normal text-gray-400 text-sm mt-1.5'>New to Doctors Bari? <Link className='text-secondary font-bold' to="/signup"> Create a new Account </Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;