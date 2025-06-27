import * as motion from "motion/react-client"
import { Proj } from "../proj/projData"


export default function Card({slug, thumbnailRef, metaTitle}: Proj) {
  return (
    <motion.a
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
      href={`/proj/${(encodeURIComponent(slug))}`}
      className={`flex flex-col space-y-card-gap`}
    >
      <img
        className="w-full rounded-image aspect-square object-cover"
        src={thumbnailRef}
        alt={metaTitle}
      />
      <div className="text-style-card-title">{metaTitle}</div>
    </motion.a>
  )
}