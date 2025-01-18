interface LinkProps {
  text: string,
  linkUrl: string
}
interface LinkRowProps {
  linkProps: LinkProps[]
}
export default function LinkRow({linkProps}: LinkRowProps) {
  return (
    <div className={`flex flex-row body-text gap-[2rem]`}>
      {
        linkProps.map(x => <a href={x.linkUrl}>{x.text}</a>)
      }
    </div>
  )
}