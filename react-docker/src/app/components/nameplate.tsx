"use client"

import * as motion from "motion/react-client"
import { AnimatePresence, AnimationScope, useAnimate } from "motion/react"
import { useState, useEffect } from "react"

const subtitles = [
    "ML Engineer",
    "CS @ UIUC",
    "Swiftie",
    "UI/UX Designer",
    "Weight Lifter",
    "Beyoncé Lover",
    "Mario Kart Racer",
]

function NameplateStar() {
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
}
function NameplateSubtitle() {
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='text-style-display-subtitle'
            >
                {subtitles[index]}
            </motion.div>
        </AnimatePresence>
    )
}
function NameplateText() {
    return (
        <div className="w-full h-full flex flex-col justify-end items-center pb-[1.17113rem]">
            <div className="flex flex-col gap-[1.08rem] text-onwhite">
                <div className='text-style-display-title'>Jonathan Gao</div>
                <NameplateSubtitle />
            </div>
        </div>
    )
}
export default function Nameplate() {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate("li", { opacity: 1} )
    })

    return (
        <div className="h-[53.625rem] flex justify-center">
            <motion.div
                className="w-[62.625rem] h-[30.6875rem] mt-[10.5rem] p-[3rem] bg-pitch rounded-[2rem]"
            >
                <NameplateStar ref={scope}/>
                <NameplateText ref={scope}/>
            </motion.div>
        </div>
    )
}