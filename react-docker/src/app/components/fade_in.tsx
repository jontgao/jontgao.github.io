import * as motion from "motion/react-client"

interface FadeInProps {
    children: React.ReactNode
}
export default function FadeIn({children}: FadeInProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "easeOut"}}
        >
            {children}
        </motion.div>
    )
  }