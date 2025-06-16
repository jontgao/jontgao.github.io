import TwoCol from './two_col'
import {ButtonRow} from './button'
import {socials} from './ex_data'

export default function AboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <TwoCol left={
        <div className="md:pr-[4rem]">
          <h2>H2 About Me</h2>
          <div className="body-text">
            <p>
                I'm Jonathan, a Masters student in computer science at the University of Illinois at Urbana-Champaign. I've worked in AI/ML, software engineering, UI/UX, and a variety of leadership roles (such as serving as Co-Director for HackIllinois 2023). Some of my favorites include weight lifting, <i>Winnie-the-Pooh</i> by A. A. Milne, literally everything by Taylor Swift, and the show <i>Fellow Travelers</i>.
            </p>
            <p>
                Feel free to say hello—I'd love to get to know you!
            </p>
          </div>
          <ButtonRow buttonProps={socials}/>
        </div>
      } right={
        <img className="rounded-full aspect-square object-cover" src="https://parade.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjEwOTM3OTYxNjE5OTI0OTY5/jonathan-bailey.jpg" />
      }/>
    </>
  )
}