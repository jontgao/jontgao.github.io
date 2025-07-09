import Icon from "./easyIcon";
import {easyIconNameType} from "./easyIcon";

export interface ButtonProps {
    text: string;
    iconName?: easyIconNameType;
    className?: string;
}
export function SolidButton({text, iconName, className}: ButtonProps) {
  return (
    // TODO: smooth animation for check mark appearing/disappearing
    <div
      className={`
        button-base-style
        flex flex-row	gap-[0.25rem]
        bg-mustard
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </div>
  )
}
export function HollowButton({text, iconName, className}: ButtonProps) {
  return (
    <div
      className={`
        button-base-style
        flex flex-row	gap-[0.25rem]
        border border-pitch
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </div>
  )
}
