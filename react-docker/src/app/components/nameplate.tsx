function NameplateStar() {
    return (
        <div className="relative w-full h-0">
            <img src="star.svg" className="w-[12.03975rem] h-[12.03975rem] absolute top-[-8rem] right-[2rem]" />
        </div>
    )
}
function NameplateText() {
    return (
        <div className="w-full h-full flex flex-col justify-end items-center pb-[1.17113rem]">
            <div className="flex flex-col gap-[1.08rem] text-onwhite">
                <div className='text-style-display-title'>Jonathan Gao</div>
                <div className='text-style-display-subtitle'>Software Engineer</div>
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