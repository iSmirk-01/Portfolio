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
      className={`${className} cursor-pointer border min-w-[10rem] max-w-[45rem] w-[60%] py-3 rounded flex items-center justify-center gap-3 h-[56px]`}
      onClick={onClick}
      
    >
      <Image src={"/discord.svg"} alt={""} width={24} height={24} className="ml-10" />
      <div className="text-start min-w-28">{text}</div>
    </button>
  );
};

export default Button