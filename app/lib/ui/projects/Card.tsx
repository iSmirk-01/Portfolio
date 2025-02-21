import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  icons: React.ElementType[]
  iconCss: string[];
  link: string;
}

function Card({
  imageAlt,
  imageSrc,
  iconCss,
  title,
  description,
  icons,
  link = "/"
}: Props) {
  return (
    <div className="grid lg:grid-cols-2 place-content-center dark:bg-slate-900/50 backdrop-blur rounded overflow-hidden mx-2 w-[80%] 2xl:max-w-7xl lg:gap-20">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className=" object-fill h-full flex-1"
      />
      <div className="flex flex-col items-center justify-center gap-7 px-6 py-8">
        <h1>{title}</h1>
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-md text-center leading-relaxed">{description}</h2>
          <Link href={link}>Visit website here</Link>
        </div>
        <div className="flex items-center justify-around gap-8 ">
          {icons.map((Icon, index) => (
            <Icon key={index} className={`${iconCss[index]} w-8 h-8`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
