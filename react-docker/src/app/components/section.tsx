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
      w-[22.375rem] md:w-[41.25rem] lg:w-5/6 lg:max-w-section-w
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