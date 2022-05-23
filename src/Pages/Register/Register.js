import React, { useEffect } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Loading from '../Hooks/Loading';
import { sendEmailVerification } from 'firebase/auth';
const Register = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await sendEmailVerification()
        alert('send verify email')
        console.log(data)
    };
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser, from, navigate])

    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    let errorText;
    if (error || googleError) {
        errorText = <p className='text-red-500'><small>{error?.message}{googleError?.message} </small></p>
    }
    return (
        <div className='bg__login__form'>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <h2 className='font-bold text-2xl text-center pt-10 mb-[-150px]'>Sign Up </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"><FaUserAlt /></i>
                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                })} type="text" className="login__input" placeholder="Your Name" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>

                            <div className="login__field">
                                <i className="login__icon fas fa-user"><MdEmail /></i>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} type="text" className="login__input" placeholder="Email Address" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="login__field">

                                <i className="login__icon fas fa-lock"><RiLockPasswordFill /></i>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character longer'
                                    }
                                })} type="password" className="login__input" placeholder="Password" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            <button type='submit' className="button login__submit">
                                <span className="button__text">Register</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        {errorText}
                        <p className='pl-10'><Link to={`/login`}>Already have an account <span className='text-yellow-400'> <br /> Login</span></Link></p>


                        <div className="social-login">
                            <h3 className='font-bold mt-10'>Log in with Google</h3>
                            <div className="social-icons">
                                <a onClick={() => signInWithGoogle()} href="#" className="social-login__icon"> <BsGoogle /></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;