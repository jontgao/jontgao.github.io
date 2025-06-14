import Icon from "./icon";
import {iconNameType} from "./icon";

interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    iconName?: iconNameType;
    className?: string;
}
export function SolidButton({text, onClick, iconName, className}: ButtonProps) {
  return (
    // TODO: smooth animation for check mark appearing/disappearing
    <button
      onClick={onClick}
      className={`
        button-base-style
        flex flex-row	gap-[0.25rem]
        bg-mustard
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </button>
  )
}
export function HollowButton({text, onClick, iconName, className}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        button-base-style
      flex flex-row	gap-[0.25rem]
      border border-pitch
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </button>
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
