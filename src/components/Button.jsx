import React from "react";
import cn from "../lib/cn";

const Button = ({ children, className, onClick = () => {}, ...props }) => {
    return (
        <button
            className={cn("p-3 bg-[#F9F9F9] text-black", className)}
            onClick={onClick}
            {...props}
        >
            {" "}
            {children}
        </button>
    );
};

export default Button;