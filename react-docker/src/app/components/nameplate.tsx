"use client"

import * as motion from "motion/react-client"
import { AnimatePresence, useAnimate } from "motion/react"
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
        <div
            ref={scope}
            className="
                nameplate-star
            "
            // w-full flex flex-col items-center bg-ketchup
            // relative -top-[9em] right-[6em] 
        >
            <motion.img
                src="star.svg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="
                    absolute -top-[2rem] right-[1rem]
                    size-[12.03975rem]
                    
                    md:-top-[9rem] md:right-[6rem]"
            />
        </div>
    )
})

const NameplateSubtitle = forwardRef<HTMLDivElement>((props, scope) => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const firstTimeout = setTimeout(() => {
            setIndex(i => (i + 1) % subtitles.length);

            const interval = setInterval(() => {
            setIndex(i => (i + 1) % subtitles.length);
            }, 2500);

            // Cleanup: clear interval on unmount
            return () => clearInterval(interval);
        }, 2500*2);

        return () => clearTimeout(firstTimeout)
    }, [])
    
    return (
        <AnimatePresence mode="wait">
            <motion.div
                ref={scope}
                key={index}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='text-style-display-subtitle nameplate-subtitle'
            >
                {subtitles[index]}
            </motion.div>
        </AnimatePresence>
    )
})

const NameplateText = forwardRef<HTMLDivElement>((props, scope) => {
    return (
        <div ref={scope} className="w-full h-full flex flex-col justify-end items-center pb-[1.17113rem] nameplate-text">
            <div className="flex flex-col gap-[1.08rem] text-onwhite">
                <div className='text-style-display-title'>Jonathan Gao</div>
                <NameplateSubtitle ref={scope}/>
            </div>
        </div>
    )
})

const Nameplate = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const enterSequence = async () => {
            await animate(".nameplate-star, .nameplate-text, .nameplate-subtitle", { opacity: 0 }, { duration: 0 })
            await animate(scope.current, { opacity: 1 }, { duration: 0 })
            await animate(scope.current, { transform: "scaleX(1)" }, { duration: 0.2, delay: 0.15 })
            await animate(".nameplate-star", { opacity: 1 }, { duration: 0.3 })
            await animate(".nameplate-text", { opacity: 1 }, { duration: 0.3 })
            await animate(".nameplate-subtitle", { opacity: 1 }, { duration: 0.3 })
        }
        enterSequence()
    }, [scope])

    return (
        <div className="h-[53.625rem] flex justify-center">
            <motion.div
                ref={scope}
                className="
                           w-full max-w-[22.5rem] mx-[1rem] my-[3rem] p-[2rem]
                         bg-pitch rounded-[2rem] opacity-0
                           relative

                           md:max-w-[46rem] md:h-[30.6875rem] md:mt-[10.5rem] md:p-[3rem]
                           lg:max-w-[62.625rem]
                "

                //  w-[62.625rem] h-[30.6875rem] mt-[10.5rem] p-[3rem]
            >
                <NameplateStar ref={scope}/>
                <NameplateText ref={scope}/>
            </motion.div>
        </div>
    )
}
export default Nameplate
