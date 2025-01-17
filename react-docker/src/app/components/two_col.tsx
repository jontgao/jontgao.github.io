import Icon from './icon'

export interface TwoColProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}

export default function TwoCol({left, right, className}: TwoColProps) {
  return (
    <div className={`flex flex-row gap-[1.25rem] ${className || ''}`}>
      <div className="flex-auto w-[41.125rem]">{left}</div>
      <div className="flex-auto w-[20.125rem]">{right}</div>
    </div>
  )
}