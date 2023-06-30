import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit, formState: {errors}} = useForm();

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div className='h-[600px] flex justify-center items-center my-20'>
            <div className=' p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-3xl font-bold mb-6 text-black text-center'> Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Name:</span></label>
                        <input name='name' type="text" {...register("name")} className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                    </div>
                    <div className='form-control mt-3 w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Email:</span></label>
                        <input name='email' type="email" {...register("email")} className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                    </div>
                    <div className='mt-3 form-control w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Password:</span></label>
                        <input type='password' {...register("password", {required: "Password is required", minLength: {value: 6, message: "Password must be 6 characters or longer."}})} className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <br />
                    <input type="submit" value="Sign Up" className="btn text-white w-full" />
                </form>
                <p className='font-normal text-gray-400 text-sm mt-1.5'> Already have an Account? <Link className='font-bold text-secondary' to="/login"> Please Login </Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;