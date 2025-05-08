import FadeIn from "./fade_in";

interface SectionProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}
interface SectionWrapperProps extends SectionProps {}

export function Section({children, content, className}: SectionProps) {
  return (
    <div className={`${className || ''}`}>
      <FadeIn>
      {children || content}
      </FadeIn>
    </div>
  )
}
export function SectionWrapper({children, content, className}: SectionWrapperProps) {
  return (
    <div className={`flex flex-col items-center my-[10rem] ${className || ''}`}>
      <div className="w-section-w flex flex-col gap-y-[12.5rem] items-stretch">
        {children || content}
      </div>
    </div>
  )
}