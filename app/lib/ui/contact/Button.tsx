import Image from "next/image";
import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, className = "", onClick }) => {

  return (
    <button
      className={`${className} cursor-pointer border min-w-[10rem] max-w-[45rem] w-[60%] py-4 rounded flex items-center justify-center gap-3`}
      onClick={onClick}
      
    >
      <Image src={"/discord.svg"} alt={""} width={30} height={30} />
      <div className="text-start min-w-20">{text}</div>
    </button>
  );
};

export default Button