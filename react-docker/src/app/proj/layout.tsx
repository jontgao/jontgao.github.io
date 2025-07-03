import AboutMe from '../components/about_me';
import { LinkButtonRow } from '../components/link_button';
import {SectionWrapper, Section} from '../components/section'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="proj-hero-bg pt-1"> {/* pt-1 to prevent margin collapsing */}
      <SectionWrapper>
        <Section content={
          <>
            {children}
            <LinkButtonRow linkButtonProps={[{linkUrl:"/#projects", buttonProps:{text: "More Projects"}}, {linkUrl:"#about", buttonProps:{text: "Get In Touch"}}]}/>
          </>
        }/>
        <Section content={<AboutMe />} />
      </SectionWrapper>
    </div>
  )
}
