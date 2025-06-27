'use client'
import {SolidButton, ButtonProps} from "./button"

export interface LinkButtonProps {
    linkUrl: string
    buttonProps: ButtonProps
}
export function LinkButton({linkUrl, buttonProps}: LinkButtonProps) {
    return (
        <button onClick={(e) => { e.preventDefault(); window.location.href=linkUrl }}>
            <SolidButton {...buttonProps}/>
        </button>
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