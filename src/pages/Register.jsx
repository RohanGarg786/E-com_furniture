import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { registerValidation } from "../lib/validations";
import toast from "react-hot-toast";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useSupabaseAuth } from "../context/SupabaseAuthContext";
import { LuLoader } from "react-icons/lu";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

const Register = () => {
    const {signUpUserWithEmailAndPassword,user} = useSupabaseAuth();
    // const { user, registerUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading ,setLoading] = useState(false);
    const [registerData, setRegisterData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
       let result = await signUpUserWithEmailAndPassword(registerData);
        if(result){
            setLoading(false);
            setRegisterData(INITIAL_STATE);
            navigate("/");
        }
    };

    if (user) {
        return <Navigate to={"/"} replace={true} />;
    }

    return (
        <div className="h-screen bg-white">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    value={registerData.username}
                                    onChange={handleChange}
                                    name="username"
                                    type="text"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={registerData.email}
                                    onChange={handleChange}
                                    name="email"
                                    type="text"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={registerData.password}
                                    onChange={handleChange}
                                    name="password"
                                    type="text"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                            disabled={loading}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#2A254B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2A254B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {
                                    loading ? <LuLoader size={25} className="animate-spin"/> : "Sign Up"
                                }
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already Have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold leading-6 text-[#2A254B] hover:text-indigo-500"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
