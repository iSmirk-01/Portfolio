import Image from "next/image";
import Link from "next/link";
import sleekAvatar from "@/public/sleek avatar.png";

function Card() {
  return (
    <main className="grid md:grid-cols-2 place-content-center dark:bg-slate-700/50 backdrop-blur-lg px-4 py-10 md:px-0 md:py-0 gap-7 min-h-max mx-4 max-h-max rounded overflow-hidden">
      <Image
        src={sleekAvatar}
        alt={"An Image of a sleek mannequin"}
        className="justify-self-center rounded-full md:rounded-none max-h-[300px] md:w-full w-[70%]"
      />
      <div className="flex flex-col md:items-start justify-center gap-1 pr-4 py-2 text-center">
        <h1 className="">Hello! My name is Federico Aguirre.</h1>
        <h2>I&apos;m a Software developer</h2>
        <Link href={"/contact"} className="underline-offset-4 underline">
          Contact me here
        </Link>
      </div>
    </main>
  );
}

export default Card;
