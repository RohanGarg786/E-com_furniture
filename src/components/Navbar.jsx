import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { IoMenu } from "react-icons/io5";

const links = [
    {
        text: "Home",
        path: "/",
    },
    {
        text: "Shop",
        path: "/shop",
    },
    {
        text: "About",
        path: "/about",
    },
];

const Navbar = () => {
    const { user, logoutUser } = useContext(UserContext);

    return (
        <header className="shadow-lg bg-[rgba(118,103,152,0.13)] mb-[20px]">
            <div className="w-full max-w-screen-lg mx-auto flex py-2 items-center justify-between px-[4px] ">
                <h1>Logo</h1>

                <nav className="flex gap-5  ">
                    {links.map((link) => {
                        return <Link className="shadow-lg shadow-[black]" key={link.text} to={link.path}>{link.text}</Link>;
                    })}

                    {user ? (
                        <button onClick={logoutUser}>Logout</button>
                    ) : (
                        <button>Login</button>
                    )}
                </nav>
            </div>
            <div>
                <IoMenu size={30}/>
            </div>
        </header>
    );
};

export default Navbar;
