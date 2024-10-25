// This is a basic button component for this project.

import React from "react"

interface ButtonProps {
    content: string,
    backgroundColor: string,
    width: string,
    height: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {

    const {content, backgroundColor, width, height, onClick} = props;

    return (
        <button
            type="button"
            className={`inline-block rounded-lg bg-${backgroundColor} w-${width} h-${height} text-center text-lg font-medium text-black transition duration-150 hover:opacity-90 focus:outline-none active:bg-plum motion-reduce:transition-none`}
            onClick={onClick}>
            {content}
        </button>
    );
}

export default Button;