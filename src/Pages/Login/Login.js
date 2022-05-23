import React, { useEffect } from 'react';
import './Login.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Loading from '../Hooks/Loading';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

        console.log(data)
    };
    const handleResetPassword = async () => {
        const email = getValues("email")
        await sendPasswordResetEmail(email);
        if (!email) {
            alert('Please Enter your valid email')
        } else {

            alert('Reset password Sent your email');
        }
    }
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
            <div className="container ">
                <div className="screen ">
                    <div className="screen__content">
                        <h2 className='font-bold text-2xl text-center pt-10 mb-[-100px]'>Login </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="login">
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
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        {errorText}
                        <p className='pl-10'><Link className='text-yellow-400 pr-20' to={`/register`}>Sign Up</Link></p>
                        <p onClick={() => handleResetPassword()} className='pl-10'><Link className='text-yellow-400 pr-20' to={``}>Forget Password</Link></p>

                        <div className="social-login">
                            <h3 className='font-bold mt-3'>Log in with Google</h3>
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

export default Login;