import { LinkRow } from "./link_row";
import {footerLinks} from "./link_data"

interface FooterProps {
    className?: string
}
export default function Footer(footerProps: FooterProps) {
    return (
        <div className="
            h-[26.5rem]
            flex justify-center items-end
            footer-bg"
        >
            <div className={`
                w-full px-[3rem] py-[3rem]
                flex flex-col gap-[2rem] items-center
                rounded-t-[2rem]
                bg-pitch text-onwhite

                md:w-full md:max-w-[82.625rem] md:h-[8.5rem] 
                md:flex-row md:justify-between
                ${footerProps.className || ""}
            `}>
                <LinkRow linkProps={footerLinks} />
                <div>Made & Designed by <b>Jonathan Gao</b></div>
            </div>
        </div>
    )
}