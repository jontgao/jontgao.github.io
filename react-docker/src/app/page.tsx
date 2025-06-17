import ProjectShowcase from './components/project_showcase';
import AboutMe from './components/about_me';
import {SectionWrapper, Section} from './components/section'
import {navLinks} from './components/ex_data'
import LinkRow from './components/link_row';
import Nameplate from './components/nameplate';
import Footer from './components/footer';
import FadeIn from './components/fade_in';

export default function Projects() {
  return (
    <div className='w-full'>
      <div className="bg-hero md:bg-hero-md lg:bg-hero-lg xl:bg-hero-xl bg-cover-x bg-no-repeat">
        <Nameplate />
        <div className="hidden md:block fixed top-[3rem] right-[4rem]">
          <LinkRow linkProps={navLinks} />
        </div>
        
        <SectionWrapper>
          <Section content={<ProjectShowcase />} />
          <Section content={<AboutMe />} />
        </SectionWrapper>
      </div>
      
      <div className="
        h-[26.5rem]
        flex justify-center items-end
        bg-footer-img bg-bottom bg-cover-x bg-no-repeat
      ">
        <Footer />
      </div>
    </div>
  );
}