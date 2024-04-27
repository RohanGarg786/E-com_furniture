import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginValidations } from "../lib/validations";
import toast from "react-hot-toast";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { LuLoader } from "react-icons/lu";
import { useSupabaseAuth } from "../context/SupabaseAuthContext";

const INITIAL_STATE = {
    username: "",
    password: "",
};

const Login = () => {
    const {signInUserWithEmailAndPassword,user} = useSupabaseAuth();
    const navigate = useNavigate();
    // const { user, loginUser } = useContext(UserContext);
    const [loginData, setLoginData] = useState(INITIAL_STATE);
    const [loading , setLoading] = useState(false);

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
       let result = await signInUserWithEmailAndPassword(loginData);
        if(result){
            setLoading(false);
            setLoginData(INITIAL_STATE);
            navigate("/", { replace: true });
        }
    };

    if (user) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="h-screen bg-white">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                                    value={loginData.email}
                                    onChange={handleChange}
                                    name="email"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    value={loginData.password}
                                    onChange={handleChange}
                                    name="password"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                loading ? <LuLoader size={25} className="animate-spin "/> : " Sign In"
                               }
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't Have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold leading-6 text-[#2A254B] hover:text-indigo-500"
                        >
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
