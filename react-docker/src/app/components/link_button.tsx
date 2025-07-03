'use client'
import * as motion from "motion/react-client"
import {SolidButton, ButtonProps} from "./button"

export interface LinkButtonProps {
    linkUrl: string
    buttonProps: ButtonProps
}
export function LinkButton({linkUrl, buttonProps}: LinkButtonProps) {
    return (
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          href={linkUrl}
        >
            <SolidButton {...buttonProps}/>
        </motion.a>
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