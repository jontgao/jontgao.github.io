import Icon from "./icon";
import {iconNameType} from "./icon";

interface ButtonProps {
    text: string;
    linkUrl?: string;
    iconName?: iconNameType;
    className?: string;
}
export function SolidButton({text, linkUrl, iconName, className}: ButtonProps) {
  return (
    <a
      href={linkUrl}
      className={`
        button-base-style
        flex flex-row	gap-[0.25rem]
        bg-mustard
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </a>
  )
}
export function HollowButton({text, linkUrl, iconName, className}: ButtonProps) {
  return (
    <a
      href={linkUrl}
      className={`
        button-base-style
      flex flex-row	gap-[0.25rem]
      border border-pitch
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </a>
  )
}

interface ButtonRowProps {
  buttonProps: ButtonProps[];
  className?: string;
}
export function ButtonRow({buttonProps, className}: ButtonRowProps) {
  return (
    <div className={`button-row-style my-[3rem] ${className || ""}`}>
      {
        buttonProps.map((buttonProp, i) => 
          <SolidButton {...buttonProp} key={i}/>
        )
      }
    </div>
  )
}
