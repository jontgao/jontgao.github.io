import ProjectShowcase from './components/project_showcase';
import AboutMe from './components/about_me';
import {SectionWrapper, Section} from './components/section'

export default function Projects() {

  return (
    <div className="bg-hero-img">
      <div className="h-[858px] ">
        {/* continue from here: make the nameplate thing */}
      </div>
      
      <SectionWrapper>
        <Section content={<ProjectShowcase />} />
        <Section content={<AboutMe />} />
      </SectionWrapper>
    </div>
  );
}