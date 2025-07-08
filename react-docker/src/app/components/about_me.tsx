import TwoCol from './two_col'
import {LinkButtonRow} from './link_button'
import {socials} from './link_data'

export default function AboutMe() {
  return (
    <div id="about" className='linked-section'>
      <h1>It's me, hi 🌟</h1>
      <TwoCol left={
        <div className="md:pr-[2rem] lg:pr-[4rem]">
          <h2>A little about me...</h2>
          <div className="body-text">
            <p>
                I'm Jonathan, a Masters student in computer science at the University of Illinois at Urbana-Champaign. I've worked in AI/ML, software engineering, UI/UX, and a variety of leadership roles (such as serving as Co-Director for HackIllinois 2023). Some of my favorites include weight lifting, <i>Winnie-the-Pooh</i> by A. A. Milne, literally everything by Taylor Swift, and the show <i>Fellow Travelers</i>.
            </p>
            <p>
                Feel free to say hello—I'd love to get to know you!
            </p>
          </div>
          <LinkButtonRow linkButtonProps={socials}/>
        </div>
      } right={
        <img className="rounded-full aspect-square object-cover" src="/propic.jpg" />
      }/>
    </div>
  )
}