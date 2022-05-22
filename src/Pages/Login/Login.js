import React, { useRef } from 'react';
import './Login.css'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };
    return (
        <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <h2 className='font-bold text-2xl text-center pt-10 mb-[-100px]'>Login </h2>
                    <form onSubmit={handleSubmit(onSubmit)} class="login">
                        <div class="login__field">
                            <i class="login__icon fas fa-user"><FaUserAlt /></i>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} type="text" class="login__input" placeholder="Email Address" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="login__field">

                            <i class="login__icon fas fa-lock"><RiLockPasswordFill /></i>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 character longer'
                                }
                            })} type="password" class="login__input" placeholder="Password" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <button type='submit' class="button login__submit">
                            <span class="button__text">Log In Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <p className='pl-10'><Link className='text-yellow-400 pr-20' to=''>Forget Password</Link></p>

                    <div class="social-login">
                        <h3 className='font-bold'>Log in with Google</h3>
                        <div class="social-icons">
                            <a href="#" class="social-login__icon"> <BsGoogle /></a>
                        </div>
                    </div>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>



    );
};

export default Login;