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
function HollowButton({text, linkUrl, iconName, className}: ButtonProps) {
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
    <div className={`flex flex-wrap gap-x-[1rem] gap-y-[0.5rem] ${className || ""}`}>
      {
        buttonProps.map((buttonProp) => 
          <SolidButton {...buttonProp} />
        )
      }
    </div>
  )
}

interface FilterProps {
  text: string;
  isChecked: boolean;
  className?: string;
}
export function Filter({text, isChecked, className}: FilterProps) {
  let button = isChecked
    ? (<SolidButton text={text} iconName="checked" className={className}/>)
    : (<HollowButton text={text} className={className} />)
  return (
    <>{button}</>
  )
}