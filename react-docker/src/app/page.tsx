import ProjectShowcase from './components/project_showcase';
import AboutMe from './components/about_me';
import {SectionWrapper, Section} from './components/section'
import Nameplate from './components/nameplate';

export default function Main() {
  return (
    <div className="hero-bg">
      <Nameplate />
      
      <SectionWrapper>
        <Section content={<ProjectShowcase />} />
        <Section content={<AboutMe />} />
      </SectionWrapper>
    </div>
  );
}