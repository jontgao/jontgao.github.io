export default function Card({imageUrl, title, icons}) {
    return (
      <div className="w-[20rem] space-y-4">
        <img
            className="w-full aspect-square object-cover"
            src={imageUrl}
            alt={title}
        />
        <div>
            <div className="text-style-card-title">{title}</div>
            <div className="space-x-2">
                {icons}
            </div>
        </div>
      </div>
    )
  }