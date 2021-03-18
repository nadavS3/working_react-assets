import React from "react";
import { color } from "sass";
import "./genericButton.scss"
interface ButtonProps {
    text: string,
    size: "small" | "medium" | "big",
    backgroundColor:<color>
}
const Button: React.FC<ButtonProps> = ({ size, text }) => {



    return (<div
    className={`${size} button`}
    >
        {text}
    </div>)
}

export default Button;

