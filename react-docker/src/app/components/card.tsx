import * as motion from "motion/react-client"

export enum CardCategories {
  One,
  Two,
  Three,
  Four
}
export interface CardProps {
  id: number;
  imageUrl: string;
  title: string;
  categories: CardCategories[];
  linkUrl?: string;
  className?: string;
}

export default function Card({id, imageUrl, title, linkUrl, className}: CardProps) {
  return (
    <motion.a
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
      href={linkUrl} rel="noreferrer"
      className={`flex flex-col space-y-card-gap ${className || ''}`}
    >
      <img
        className="w-full rounded-image aspect-square object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="text-style-card-title">{title}</div>
    </motion.a>
  )
}