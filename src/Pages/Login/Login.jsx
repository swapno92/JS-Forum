// import React from 'react';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState([])
    // console.log(error);

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                swal("Good job!", "Login Success.", "success");
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="border border-gray-300 rounded-lg  lg:w-1/2  mx-auto" >
            < div className="pb-8 mx-4 lg:mx-auto   lg:px-0 md:px-10 flex flex-col items-center " data-aos="flip-left">
                <h2 className="text-3xl my-10 text-center font-bold" >This is Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-md">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-semibold text-md">Forgot password?</a>
                        </label>
                        {
                            error && <p className="font-semibold text-sm text-red-400">{error}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                </form>
                <button onClick={handleWithGoogle} className=" bg-slate-300 px-16 py-2 rounded-lg border border-lime-600 mt-6 flex items-center gap-2" ><FcGoogle className="text-2xl"></FcGoogle>Sign in with google</button>
            </div>
        </div>
    );
};

export default Login;