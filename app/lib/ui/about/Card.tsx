interface Props {
    title: string;
    description: string;
}

function Card({ title, description }: Props) {
  return (
    <div className="min-h-64 bg-slate-800/40 backdrop-blur flex flex-col items-center gap-10 py-8 px-4 w-[70%] max-w-6xl rounded">
      <h1>{title}</h1>
      <p className="max-w-4xl leading-relaxed">{description}</p>
    </div>
  )
}

export default Card
