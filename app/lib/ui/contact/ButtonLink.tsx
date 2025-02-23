import Link from 'next/link'

interface Props {
    href: string;
    text: string;
    className: string;
}

function ButtonLink({ href, text, className }: Props) {
  return (
    <Link
    href={href}
      className={`${className} cursor-pointer border min-w-[10rem] max-w-[45rem] w-[60%] py-4 rounded text-center`}
      target="_blank"
    >
      {text}
    </Link>
  );
}

export default ButtonLink
