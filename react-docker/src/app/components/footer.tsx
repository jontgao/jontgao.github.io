import LinkRow from "./link_row";
import {footerLinks} from "./ex_data"

interface FooterProps {
    className?: string
}
export default function Footer(footerProps: FooterProps) {
    return (
        <div className={`
            w-[82.625rem] h-[5.5rem] px-[3rem]
            flex justify-between items-center
            bg-pitch text-onwhite rounded-[2rem]
            ${footerProps.className || ""}`}
        >
            <LinkRow linkProps={footerLinks} />
            <div>Made & Designed by Jonathan Gao</div>
        </div>
    )
}