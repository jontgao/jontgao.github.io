import FadeIn from "./fade_in";

interface SectionProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}
interface SectionWrapperProps extends SectionProps {}

export function Section({children, content, className}: SectionProps) {
  return (
    <div className={`
      w-section-w md:w-section-w-md md:max-w-section-w-lg
      ${className || ''}
    `}>
      <FadeIn>
        {children || content}
      </FadeIn>
    </div>
  )
}
export function SectionWrapper({children, content, className}: SectionWrapperProps) {
  return (
    <div className={`
      flex flex-col items-center my-[10rem] w-full ${className || ''}
    `}>
      <div className="flex flex-col gap-y-[12.5rem] items-center w-ful">
        {children || content}
      </div>
    </div>
  )
}