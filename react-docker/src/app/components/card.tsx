import * as motion from "motion/react-client"
import Link from 'next/link';

import { Proj } from "../proj/projData"


export default function Card({slug, thumbnailRef, metaTitle}: Proj) {
  return (
    <Link href={`/proj/${(encodeURIComponent(slug))}`}>
      <motion.div
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
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