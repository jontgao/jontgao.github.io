import * as motion from "motion/react-client"
import { Proj } from "../proj/projData"
import Link from "next/link"


export default function Card({slug, externalLink, thumbnailRef, metaTitle}: Proj) {
  return (
    <Link href={externalLink ? externalLink : `/proj/${(encodeURIComponent(slug))}`}>
      <motion.div
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.1 },
        }}
        // href={externalLink ? externalLink : `/proj/${(encodeURIComponent(slug))}`}
        className={`flex flex-col space-y-card-gap`}
      >
        <img
          className="w-full rounded-image aspect-square object-cover"
          src={thumbnailRef}
          alt={metaTitle}
        />
        <div className="text-style-card-title">{metaTitle}</div>
      </motion.div>
    </Link>
  )
}