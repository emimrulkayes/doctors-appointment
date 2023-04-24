import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

const Login = () => {

    const {register, handleSubmit} = useForm();
    const [data, setData] = useState('');

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className=' p-8 rounded-lg shadow-lg w-1/3'>
                <h2 className='text-4xl font-bold mb-4'> Login</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div>
                        <label className="label"><span className="label-text">Your Email</span></label>
                        <input {...register("email")} name='email' type="text" className="input input-bordered w-full text-slate-700" required />
                    </div>
                    <div className='mt-4'>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password")} type='password' className="input input-bordered w-full text-slate-700" required />
                    </div>
                    
                    <p>{data}</p>
                    <br />
                    <input type="submit" value="Submit" className="btn text-white w-full" />
                </form>
            </div>
        </div>
    );
};

export default Login;