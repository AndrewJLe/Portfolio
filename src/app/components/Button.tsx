import React from 'react';

interface ButtonProps {
    text: string
    link: string
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
    return (
        <a href={link} className="text-black border-solid border-2 border-black rounded-md py-2 px-4 hover:text-secondary hover:border-secondary duration-300">
            {text}
        </a>

    );
};

export default Button;