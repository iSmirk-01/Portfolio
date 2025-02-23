import Image from "next/image";
import Link from "next/link";
import sleekAvatar from "@/public/sleek avatar.png";
import { bebas_neue } from "../../fonts";

function Card() {
  const link_styles =
    "underline-offset-4 underline tracking-wide hover:text-blue-300 focus:text-blue-300 active:text-blue-600 text-blue-400";
  return (
    <main className="grid md:grid-cols-2 place-content-center dark:bg-transparent dark:border dark:border-white px-4 py-10 md:px-0 md:py-0 gap-7 min-h-max mx-4 max-h-max rounded overflow-hidden shadow-lg bg-white/70 text-gray-900 dark:text-zinc-100 font-medium backdrop-blur">
      <Image
        src={sleekAvatar}
        alt={"An Image of a sleek mannequin"}
        className="justify-self-center rounded-full md:rounded-none max-h-[300px] md:w-full w-[70%] object-cover"
      />
      <div className="flex flex-col md:items-start justify-center gap-2 text-center md:text-left px-6">
        <h1 className="text-2xl font-bold tracking-wider">
          Hello! My name is Federico Aguirre.
        </h1>
        <h2 className="text-xl tracking-wide">I&apos;m a Software Developer.</h2>
        <p className="mt-2 tracking-widest">
          Feel free to{" "}
          <Link
            href="/contact"
            className={`${bebas_neue.className} ${link_styles}`}
          >
            get in touch
          </Link>{" "}
          or{" "}
          <Link
            href="/about"
            className={`${bebas_neue.className} ${link_styles}`}
          >
            learn more about me
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

export default Card;
