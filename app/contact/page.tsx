"use client"

import Link from 'next/link'
import { useState } from 'react'

function Contact() {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const hadnleCopy = async () => {
        try {
            await navigator.clipboard.writeText("ismirk");
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("error copying: ", err)
        }
    }

  return (
    <main>
      <div className="flex flex-col items-center gap-5 text-lg lg:text-xl">
        <Link href={"mailto:federicoaguirre134@gmail.com"} target="_blank"
        className='border px-4 py-2 w-[7.5rem] rounded text-center'>
            Email
        </Link>
        <Link href={"https://www.instagram.com/ismirk8"} target='_blank'>
            Instagram
        </Link>
        <Link href={"https://github.com/ismirk-01"} target="_blank">
            Github
        </Link>
        <button className={`${isCopied ? "" : ""}`} onClick={hadnleCopy}>
            {isCopied ? "Copied!" : "Discord"}
        </button>
      </div>
    </main>         
  );
}

export default Contact
