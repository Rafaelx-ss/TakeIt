import React from "react";

interface ButtonProps {
    label: string;
    type?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ label, type = "primary" }) => {
    const btnClass =
        type === "primary"
        ? "btn-primary"
        : type === "secondary"
        ? "btn-secondary"
        : "btn-outline";

    return <button className={`${btnClass} mt-4`}>{label}</button>;
};

export default Button;
