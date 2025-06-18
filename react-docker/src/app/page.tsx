import ProjectShowcase from './components/project_showcase';
import AboutMe from './components/about_me';
import {SectionWrapper, Section} from './components/section'
import {navLinks} from './components/ex_data'
import LinkRow from './components/link_row';
import Nameplate from './components/nameplate';
import Footer from './components/footer';

export default function Projects() {
  return (
    <div className='w-full max-w-[128rem] mx-auto'>
      <div className="hero-bg">
        <Nameplate />
        <div className="hidden md:block fixed top-[3rem] right-[4rem]">
          <LinkRow linkProps={navLinks} /> 
          {/* TODO: for rly wide screens, make this sitck relative to max-w */}
        </div>
        
        <SectionWrapper>
          <Section content={<ProjectShowcase />} />
          <Section content={<AboutMe />} />
        </SectionWrapper>
      </div>
      
      <div className="
        h-[26.5rem]
        flex justify-center items-end
        footer-bg"
      >
        <Footer />
      </div>
    </div>
  );
}