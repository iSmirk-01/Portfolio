import Link from "next/link"

interface Props {
    href: string;
    label: string;
    
}

function NavLink({ label , href }: Props) {
  return (
    <Link href={href} className="cursor-pointer relative group">
      {label}
      <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
    </Link>
  );
}

export default NavLink
