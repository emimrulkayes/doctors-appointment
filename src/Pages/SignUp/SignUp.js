import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();

    const {createUser} = useContext(AuthContext);

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch( error => console.log(error));

    }

    return (
        <div className='h-[600px] flex justify-center items-center my-20'>
            <div className=' p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-3xl font-bold mb-6 text-black text-center'> Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp) }>
                    <div className='form-control w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Name:</span></label>
                        <input name='name' type="text" {...register("name", {required: "Name is required"})} className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className='form-control mt-3 w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Email:</span></label>
                        <input name='email' type="email" {...register("email", {required: "Email Address is required"})} className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className='mt-3 form-control w-full max-w-xs'>
                        <label className="label"><span className="label-text text-gray-600 font-semibold">Password:</span></label>
                        <input type='password' {...register("password", 
                            {
                                required: "Password is required", 
                                minLength: {
                                    value: 6, 
                                    message: "Password must be 6 characters or longer."
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[.!@#$&*]).{6}$/, 
                                    message: "Password must have uppercase and spacial character."
                                }

                            }
                        )} { ...watch("watch") } className="input input-bordered w-full text-gray-400 font-normal border-gray-300" />
                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <br />
                    <input type="submit" value="Sign Up" className="btn text-white w-full" />
                </form>
                <p className='font-normal text-gray-400 text-sm mt-1.5'> Already have an Account? <Link className='font-bold text-secondary' to="/login"> Please Login </Link> </p>
                <div className="divider text-gray-600">OR</div>
                <button className="btn btn-outline w-full text-gray-600 hover:bg-gray-600 hover:text-white">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;