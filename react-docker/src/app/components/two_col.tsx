import Icon from './icon'

export interface TwoColProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftFraction?: string;
  className?: string;
}

export default function TwoCol({left, right, leftFraction, className}: TwoColProps) {
  let lw = leftFraction ? leftFraction : "2/3"
  let rw
  let [numer, denom] = lw.split('/').map(Number)
  if ((numer < denom) && (denom != 0)) {
    rw = `${(denom-numer)}/${denom}`
  } else {
    [lw, rw] = ["2/3", "1/3"]
  }
  return (
    <div className={`flex flex-col-reverse md:flex-row gap-[1.25rem] ${className || ''}`}>
      <div className={`flex-auto w-full md:w-${lw}`}>{left}</div>
      <div className={`flex-auto w-full md:w-${rw}`}>{right}</div>
    </div>
  )
}