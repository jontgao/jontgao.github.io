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
    // this seems like the best way to fix relative to max-w. the 128rem is hardcoded to the max-w, but that seems to be the best solution
    <div className="hidden md:block fixed top-[3rem] right-[4rem] mx:right-[calc(50vw-128rem/2+4rem)] text-pitch z-50">
      <LinkRow linkProps={navLinks} />
    </div>
  )
}