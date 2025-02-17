'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import TheneToggle from './TheneToggle'
import { Menu, X } from 'lucide-react'


function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between px-20 h-24">
      <TheneToggle />
      <div className="hidden gap-5 sm:flex">
        <NavLink href={"/"} label={"Home"} />
        <NavLink href={"/projects"} label={"Projects"} />
        <NavLink href={"/about"} label={"About"} />
        <NavLink href={"/contact"} label={"Contact"} />
      </div>
      <button
        className="sm:hidden flex cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>
      <div
        className={`${
          isOpen
            ? "fixed left-0 top-0 bottom-0 w-[65%] h-full p-10 ease-in duration-300 bg-slate-800"
            : "fixed left-[-100] top-0 bottom-0 h-full ease-out duration-300"
        } sm:hidden flex`}
      >
        <div className='flex sm:hidden h-full flex-col w-full justify-start items-center gap-20 px-7 py-2'>
            <button className='self-end' onClick={() => setIsOpen(!isOpen)}><X /></button>
            <div className="flex sm:hidden flex-col items-center justify-center gap-20">
              <NavLink href={"/"} label={"Home"} />
              <NavLink href={"/projects"} label={"Projects"} />
              <NavLink href={"/about"} label={"About"} />
              <NavLink href={"/contact"} label={"Contact"} />
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
