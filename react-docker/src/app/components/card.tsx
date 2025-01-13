export interface CardProps {
    id: number;
    imageUrl: string;
    title: string;
    linkUrl?: string;
    className?: string;
}

export default function Card({id, imageUrl, title, linkUrl, className}: CardProps) {
  return (
    <a href={linkUrl} rel="noreferrer" className={`flex flex-col space-y-card-gap ${className || ''}`}>
      <img
        className="w-full rounded-image aspect-square object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="text-style-card-title">{title}</div>
    </a>
  )
}