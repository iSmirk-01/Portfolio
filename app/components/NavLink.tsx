import Link from "next/link"

interface Props {
  href: string;
  label: string;
  onClick?: () => void;
    
}

function NavLink({ label , href, onClick }: Props) {
  return (
    <Link href={href} className="cursor-pointer relative group dark:active:text-blue-400 active:text-white" 
    onClick={onClick}>
      {label}
      <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
    </Link>
  );
}

export default NavLink
