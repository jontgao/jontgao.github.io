import * as motion from "motion/react-client"

function NameplateStar() {
    return (
        <div className="relative -top-[9em] right-[6em]">
            <motion.img
                src="star.svg"
                animate={{rotate: 360}}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute top-0 right-0 size-[12.03975rem]"
            />
        </div>
    )
}
function NameplateSubtitle() {
    const txt = "ML Engineer"
    return (
        <motion.div
            animate={{x: 360}}
            transition={{ duration: 3 }}
            className='text-style-display-subtitle'
        >
            {txt}
        </motion.div>
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
    return (
        <div className="h-[53.625rem] flex justify-center">
            <div className="w-[62.625rem] h-[30.6875rem] mt-[8.5rem] p-[3rem]
                bg-pitch rounded-[2rem]"
            >
                <NameplateStar />
                <NameplateText />
            </div>
        </div>
    )
}