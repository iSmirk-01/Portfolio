import Link from 'next/link'
import Image from 'next/image';

interface Props {
    href: string;
    text: string;
    className: string;
    icon: string;
    iconCss?: string
}

function ButtonLink({ href, text, className, icon, iconCss }: Props) {
  return (
    <Link
      className={`${className} cursor-pointer border min-w-[10rem] max-w-[45rem] w-[60%] py-4 rounded flex items-center justify-center gap-3 px-4 h-14`}
      href={href}
      target='_blank'
    >
      <Image
        src={icon}
        alt={"discord icon"}
        width={24}
        height={24}
        className={`${iconCss} w-6 h-6 ml-5`}
      />
        <div className='min-w-28'>
          {text}
        </div>
    </Link>
  );
}

export default ButtonLink
