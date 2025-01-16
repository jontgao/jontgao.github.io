import TwoCol from './components/two_col'
import CardGrid from './components/cardgrid'
import {ButtonRow} from './components/button'
import {albums} from './components/taylor'

export default function Projects() {
  const socials = [
    {
      text: "GitHub",
      linkUrl: "https://github.com/jontgao",
      iconName: "github"
    }, {
      text: "LinkedIn",
      linkUrl: "https://linkedin.com/jontgao",
      iconName: "linkedin"
    }, {
      text: "Resume",
      linkUrl: "",
    }
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="w-section-w flex flex-col items-stretch">
          <h1>H1 Selected Work</h1>
          <h2>H2 About Me</h2>
          <p>
            Hi! I'm Jonathan,  Compiled /favicon.ico in 138ms 74 modules GET /favicon.ico 200 in 250ms. SLkjfklsjkfejk sljdfkjkj lks
            
          {/* whitespace-pre-line not working ??? */}

            ✓ Compiled in 494ms 860 modules

          </p>

          

          <TwoCol left={
            <ButtonRow buttonProps={socials}/>
          } right={
            <ButtonRow buttonProps={socials}/>
          }/>
          <CardGrid projs={albums} />
      </div>
    </div>
  );
}