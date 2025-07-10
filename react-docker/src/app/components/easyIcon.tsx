export const easyIconMap = {
    checked: "/icons/check.svg",
    github: "/icons/github-mark.svg",
    linkedin: "/icons/LinkedIn_icon.svg"
}

export type easyIconNameType = keyof typeof easyIconMap

export default function easyIcon({name}: {name: easyIconNameType}) {
    const iconSvg = easyIconMap
[name]
    return (
        <img src={iconSvg} className="w-easy-icon-w h-easy-icon-w fill-pitch" alt={name} />
    )
  }

  