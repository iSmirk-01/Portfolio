import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { bebas_neue } from "../../fonts";

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
    <div className="grid lg:grid-cols-[65%,35%] bg-white/90 backdrop-blur-lg dark:bg-transparent dark:border dark:border-white rounded overflow-hidden w-[80%] 2xl:max-w-7xl mx-auto min-h-96 shadow-lg">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className=" object-fill h-full flex-1"
      />
      <div className="flex flex-col items-center justify-center gap-7 px-6 py-8 tracking-wider">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-md text-center leading-relaxed text-xl">
            {description}
          </h2>
          <Link
            href={link}
            className={`${bebas_neue.className} underline-offset-4 underline tracking-wide hover:text-blue-300 focus:text-blue-300 active:text-blue-600 text-blue-400 text-lg`}
          >
            Visit website here
          </Link>
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
//  export
export default Card; 
