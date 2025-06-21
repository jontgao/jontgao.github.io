import {navLinks} from './ex_data'

interface LinkProps {
  id: number,
  text: string,
  linkUrl: string
}
interface LinkRowProps {
  linkProps: LinkProps[]
}
export function LinkRow({linkProps}: LinkRowProps) {
  return (
    <div className={`flex flex-row body-text gap-[2rem]`}>
      {
        linkProps.map(x => <a href={x.linkUrl}>{x.text}</a>)
      }
    </div>
  )
}

export default function NavLinkRow() {
  return (
    <div className="hidden md:block fixed top-[3rem] right-[4rem] text-pitch">
      <LinkRow linkProps={navLinks} />
      {/* TODO: for rly wide screens, make this sitck relative to max-w */}
    </div>
  )
}