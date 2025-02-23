interface Props {
    title: string;
    description: string;
}

function Card({ title, description }: Props) {
  return (
    <div className="min-h-64 dark:bg-transparent bg-white/80 dark:border shadow-lg backdrop-blur flex flex-col items-center gap-10 py-8 px-4 w-[70%] max-w-6xl rounded text-gray-800 dark:text-white">
      <h1 className="text-3xl tracking-widest font-bold">{title}</h1>
      <p className="max-w-4xl leading-relaxed text-lg lg:text-xl tracking-wider font-medium">
        {description}
      </p>
    </div>
  );
}

export default Card
