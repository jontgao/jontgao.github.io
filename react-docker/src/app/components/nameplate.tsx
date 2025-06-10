"use client"

import * as motion from "motion/react-client"
import { AnimatePresence, AnimationScope, useAnimate } from "motion/react"
import { useState, useEffect, forwardRef } from "react"

const subtitles = [
    "ML Engineer",
    "CS @ UIUC",
    "Swiftie",
    "UI/UX Designer",
    "Weight Lifter",
    "Beyoncé Lover",
    "Mario Kart Racer",
]

const NameplateStar = forwardRef<HTMLDivElement>((props, scope) => {
    return (
        <div className="relative -top-[9em] right-[6em]">
            <motion.img
                src="star.svg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute top-0 right-0 size-[12.03975rem]"
            />
        </div>
    )
})

const NameplateSubtitle = forwardRef<HTMLDivElement>((props, scope) => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => (i+1) % subtitles.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='text-style-display-subtitle'
            >
                {subtitles[index]}
            </motion.div>
        </AnimatePresence>
    )
})

const NameplateText = forwardRef<HTMLDivElement>((props, scope) => {
    return (
        <div className="w-full h-full flex flex-col justify-end items-center pb-[1.17113rem]">
            <div className="flex flex-col gap-[1.08rem] text-onwhite">
                <div ref={scope} className='text-style-display-title'>Jonathan Gao</div>
                <NameplateSubtitle ref={scope}/>
            </div>
        </div>
    )
})

const Nameplate = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const enterSequence = async () => {
            await animate("*", { opacity: 0 }, { duration: 0 })
            await animate(".banner-first", { transform: "scaleX(1)" })
        }
        enterSequence()
    }, [scope])

    return (
        <div className="h-[53.625rem] flex justify-center">
            <motion.div
                ref={scope}
                className="w-[62.625rem] h-[30.6875rem] mt-[10.5rem] p-[3rem]
                         bg-pitch rounded-[2rem]
                           banner-first"
            >
                <NameplateStar ref={scope}/>
                <NameplateText ref={scope}/>
            </motion.div>
        </div>
    )
}
export default Nameplate
