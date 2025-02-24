"use client";

import { useEffect, useState } from "react";
import ButtonLink from "../lib/ui/contact/ButtonLink";
import Button from "../lib/ui/contact/Button";

function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [clipboardAvailable, setClipboardAvailable] = useState(false);
  // check if navigator is available 
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      setClipboardAvailable(true);
    }
  }, []);

  const handleCopy = async () => {
    if (!clipboardAvailable) return; // cancel if clipboard isn't found

    try {
      await navigator.clipboard.writeText("ismirk");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      console.log("clicked!");
    } catch (err) {
      console.error("error copying: ", err);
    }
  };

  return (
    <main className="flex flex-col items-center text-lg lg:text-xl font-medium dark:text-white text-gray-800 gap-20 my-8">
      <h1 className="text-6xl font-bold">Contacts</h1>
      <div className="flex flex-col gap-6 w-full items-center text-white">
        <ButtonLink
          href="mailto:federicoaguirre134@gmail.com"
          text="Email"
          className="bg-red-500/80 backdrop-blur"
          icon="/gmail.svg"
        />
        <ButtonLink
          href="https://www.instagram.com/ismirk8"
          text="Instagram"
          className="bg-gradient-to-r from-[#feda75]/60 via-[#d62976]/60 to-[#4f5bd5]/60 backdrop-blur"
          icon="/instagram.svg"
        />
        <ButtonLink
          href="https://github.com/ismirk-01"
          text="Github"
          className="bg-[#181717]"
          icon="/github.svg"
        />
        <Button
          text={
            isCopied
              ? "Copied!"
              : clipboardAvailable
              ? "Discord"
              : "Not available"
          }
          className="bg-[#5865F2]/50 backdrop-blur"
          onClick={handleCopy}
        />
      </div>
    </main>
  );
}

export default Contact;
