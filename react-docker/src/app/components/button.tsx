import Icon from "./icon";
import {iconNameType} from "./icon";

interface ButtonProps {
    text: string;
    iconName?: iconNameType;
    className?: string;
}
interface FilterProps {
  text: string;
  isChecked: boolean;
  className?: string;
}

export function SolidButton({text, iconName, className}: ButtonProps) {
  return (
    <div className={`
      button-base-style
      flex flex-row	gap-[0.25rem]
      bg-mustard
      ${className || ''}
    `}>
      {iconName && <Icon name={iconName} />} {text}
    </div>
  )
}
function HollowButton({text, iconName, className}: ButtonProps) {
  return (
    <div className={`
      button-base-style
      flex flex-row	gap-[0.25rem]
      border border-pitch
      ${className || ''}
    `}>
      {iconName && <Icon name={iconName} />} {text}
    </div>
  )
}

function Filter({text, isChecked, className}: FilterProps) {
  let button = isChecked
    ? (<SolidButton text={text} iconName="checked" className={className}/>)
    : (<HollowButton text={text} className={className} />)
  return (
    <>{button}</>
  )
}
// export function Filters({text, isChecked, className}: FilterProps) {
//   let button = isChecked
//     ? (<SolidButton text={text} iconName="checked" className={className}/>)
//     : (<HollowButton text={text} className={className} />)
//   return (
//     <>{button}</>
//   )
// }