import Link from "next/link"

interface Props {
    href: string;
    label: string;
    
}

function NavLink({ label , href }: Props) {
  return (
    <Link href={href} className="cursor-pointer">
        {label}
    </Link>
  )
}

export default NavLink
