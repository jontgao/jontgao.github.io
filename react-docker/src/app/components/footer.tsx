import LinkRow from "./link_row";
import {footerLinks} from "./ex_data"

interface FooterProps {
    className?: string
}
export default function Footer(footerProps: FooterProps) {
    return (
        <div className={`
            w-full px-[3rem] py-[3rem]
            flex flex-col gap-[2rem] items-center
            rounded-t-[2rem]

            md:w-full md:max-w-[82.625rem] md:h-[8.5rem] 
            md:flex-row md:justify-between

            

            bg-pitch text-onwhite
            ${footerProps.className || ""}
        `}>
            <LinkRow linkProps={footerLinks} />
            <div>Made & Designed by Jonathan Gao</div>
        </div>
    )
}