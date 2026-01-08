'use client'
import * as motion from "motion/react-client"
import {SolidButton, ButtonProps} from "./button"
import Link from "next/link"

export interface LinkButtonProps {
    linkUrl: string
    buttonProps: ButtonProps
}
export function LinkButton({linkUrl, buttonProps}: LinkButtonProps) {
    return (
      <Link href={linkUrl}>
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
        >
            <SolidButton {...buttonProps}/>
        </motion.div>
      </Link>
    )
}
interface LinkButtonRowProps {
  linkButtonProps: LinkButtonProps[];
  className?: string;
}
export function LinkButtonRow({linkButtonProps, className}: LinkButtonRowProps) {
  return (
    <div className={`button-row-style my-[3rem] ${className || ""}`}>
      {
        linkButtonProps.map((linkButtonProp, i) => 
          <LinkButton {...linkButtonProp} key={i}/>
        )
      }
    </div>
  )
}