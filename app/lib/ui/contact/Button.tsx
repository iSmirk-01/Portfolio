import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, className = "", onClick }) => {

  return (
    <button
      className={`${className} cursor-pointer border min-w-[10rem] max-w-[45rem] w-[60%] py-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button