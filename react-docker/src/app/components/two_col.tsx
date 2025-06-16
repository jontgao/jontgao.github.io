import Icon from './icon'

export interface TwoColProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}

export default function TwoCol({left, right, className}: TwoColProps) {
  return (
    <div className={`flex flex-col-reverse md:flex-row gap-[1.25rem] ${className || ''}`}>
      <div className="flex-auto w-full md:w-2/3">{left}</div>
      <div className="flex-auto w-full md:w-1/3">{right}</div>
    </div>
  )
}