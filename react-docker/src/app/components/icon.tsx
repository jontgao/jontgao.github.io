export const iconMap = {
    checked: "/icons/check.svg",
    github: "/icons/github-mark.svg",
    linkedin: "/icons/LinkedIn_icon.svg"
}

export type iconNameType = keyof typeof iconMap

export default function Icon({name}: {name: iconNameType}) {
    const iconSvg = iconMap[name]
    return (
        <img src={iconSvg} className="w-icon-w h-icon-w fill-pitch"
        />
    )
  }

  