import CheckIcon from "./icons/check.jsx"
import GithubIcon from "./icons/github-mark.jsx"
import LinkedInIcon from "./icons/LinkedIn_icon.jsx"

export const iconMap = {
    checked: CheckIcon,
    github: GithubIcon,
    linkedin: LinkedInIcon
}

type iconName = keyof typeof iconMap

export default function Icon({name}: {name: iconName}) {
    const IconComponent = iconMap[name]
    return (
        <IconComponent
            className="w-icon-w h-icon-w fill-pitch"
        />
    )
  }

  