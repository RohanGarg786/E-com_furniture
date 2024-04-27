import { createContext, useEffect, useState } from "react";
import { loginValidations, registerValidation } from "../lib/validations";
import axios from "axios";
import toast from "react-hot-toast";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(() => {
        let _user = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null;

        return _user;
    });

    const registerUser = async (registerData) => {
        try {
            let result = await registerValidation.validate(registerData, {
                abortEarly: false,
            });

            let response = await axios.post("/users/register", {
                ...result,
                role: "ADMIN",
            });

            if (!response.statusText === "OK") {
                Promise.reject("Registration failed!");
            }

            console.log(response.data);
            toast.success("Registration Success!");
            return true;
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );

            return false;
        }
    };

    const loginUser = async (loginData) => {
        try {
            let result = await loginValidations.validate(loginData, {
                abortEarly: false,
            });

            let response = await axios.post("/users/login", {
                ...result,
            });

            if (!response.statusText === "OK") {
                Promise.reject(new Error("Login Failed"));
            }

            setUser(response.data.data);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            toast.success("Login Success!");
            return true;
        } catch (error) {
            if(error.response.status  === 404){
                toast.error("User not found")
                return false;
            }
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );

            return false;
        }
    };

    const logoutUser = async () => {
        try {
            let response = await axios.post(
                "/users/logout",
                {},
                {
                    headers: {
                        Authorization: "Bearer " + user.accessToken,
                    },
                }
            );

            if (response.statusText === "OK") {
                localStorage.removeItem("user");
                setUser(null);
                toast.success("Logged out successfully");
                return true;
            }

            toast.error("logot failed");
            return false;
        } catch (error) {
            toast.error(error.message || "Something went wrong");
            return false;
        }
    };

    console.log(user);

    return (
        <UserContext.Provider
            value={{ user, registerUser, loginUser, logoutUser }}
        >
            {children}
        </UserContext.Provider>
    );
}
