'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import TheneToggle from './TheneToggle'
import { Menu, X } from 'lucide-react'


function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleMenu(){
      setIsOpen(() => !isOpen)
    }

  return (
    <nav className="flex items-center justify-between px-20 h-24 tracking-widest backdrop-blur dark:bg-gradient-to-t dark:to-red-500/60 dark:from-transparent sticky top-0 z-10 ">
      <TheneToggle />
      <div className="hidden gap-5 sm:flex font-semibold text-lg">
        <NavLink 
          href={"/"} 
          label={"Home"}
          />
        <NavLink href={"/projects"} 
          label={"Projects"} 
          />
        <NavLink 
          href={"/about"} 
          label={"About"} 
          />
        <NavLink 
          href={"/contact"} 
          label={"Contact"} 
          />
      </div>
      <button
        className="sm:hidden flex cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Open menu'
      >
        <Menu />
      </button>
      <div
        className={`${
          isOpen
            ? "fixed left-0 top-0 bottom-0 w-[65%] min-h-[100vh] p-10 ease-in duration-200 bg-white dark:bg-gray-950"
            : "fixed left-[-100%] top-0 z-50 bottom-0 h-full ease-out duration-200"
        } sm:hidden flex z-20`}
      >
        <div className="flex sm:hidden h-full flex-col w-full justify-start items-center gap-20 px-7 py-2">
          <button className="self-end" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Close menu'>
            <X />
          </button>
          <div className="flex sm:hidden flex-col items-center justify-center gap-20 font-semibold text-lg">
            <NavLink
              href={"/"}
              label={"Home"}
              onClick={handleMenu}
            />
            <NavLink
              href={"/projects"}
              label={"Projects"}
              onClick={handleMenu}
            />
            <NavLink
              href={"/about"}
              label={"About"}
              onClick={handleMenu}
            />
            <NavLink
              href={"/contact"}
              label={"Contact"}
              onClick={handleMenu}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
