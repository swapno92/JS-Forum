// import React from 'react';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import useAxiosPublick from "../../hooks/useAxiosPublick";

const Register = () => {
    const navigate = useNavigate()
    const { createUser, signInWithGoogle } = useContext(AuthContext)
    // console.log(authInfo);
    const axiosPublic = useAxiosPublick()

    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const imageUrl = e.target.image.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password, imageUrl);
        setError("")

        // if (!/^.{6,}$/.test(password)) {
        //     setError("password must be 6 character");
        //     return;
        // }
        // if (!/.*[A-Z].*/.test(password)) {
        //     setError("password must 1 capital letter");
        //     return;
        // }

        // if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=].*/.test(password)) {
        //     setError("password must be 1 special character");
        //     return;
        // }

        const passError = /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/;

        if (!passError.test(password)) {
            setError("password must be 6 character,one uppercase, one lowercase and one special character");
            return;
        }
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                updateProfile(result.user, { displayName: name, photoURL: imageUrl })
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added database')
                                    swal('"Good job!", "Registration Success", "success"');
                                    navigate('/')
                                }
                            })
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Login Success.", "success");
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className=" pb-5 border border-gray-300 rounded-lg lg:w-1/2 lg:mx-auto mx-6 lg:px-0 px-10"

        >
            <h2 className="text-3xl my-7 text-center" data-aos="fade-down">This is Register</h2>
            < form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto" data-aos="fade-down">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="image" className="input input-bordered" />
                </div>

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
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover font-semibold text-md">Forgot password?</a>
                    </label> */}
                </div>
                <p className="text-red-600">{error}</p>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-4">Already Have an account<Link className="text-blue-600 font-bold" to='/login'> Login</Link></p>
            </form >
            <div className="flex flex-colj justify-center items-center">
                <button onClick={handleWithGoogle} className=" bg-slate-300 px-16 py-2 rounded-lg border border-lime-600 mt-6 flex items-center gap-2" ><FcGoogle className="text-2xl"></FcGoogle>Sign in with google</button>
            </div>
        </div >
    );
};

export default Register;