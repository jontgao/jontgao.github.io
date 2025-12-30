import H2Subsection from "../../components/h2_subsection"
import { LinkButtonRow } from "../../components/link_button";
import TLDR from "../../components/tldr"
import { CaptionedImage } from "../../components/captioned_image";

export default function ContentHackIllinois() {
    return (
        <div className="proj-content-styles">
            <TLDR key="hackillinois-0" cols={[{title:"Quick Facts",items:["3-Day Hackathon", "750 attendees", "2 venues"]}, {title:"Timeline",items:["June 2022 - June 2023"]}, {title:"Role",items:["Co-Director"]}, {title:"Team",items:["54 staff members"]}]}/>
            <CaptionedImage key="hackillinois-1" src="/proj/hack/logo.jpg" caption="A branding image for HackIllinois 2023. Created by the HackIllinois 2023 Design Team."/>
            <H2Subsection
                key="hackillinois-2"
                subsectionTitle="9 Months of Planning"
                subsectionContent={
                    <>
                        <p key="hackillinois-2-0">I had the honor of serving as Co-Director for HackIllinois 2023. In addition to being HackIllinois's <b>return to in-person</b> after two virtual events (due to Covid), it was the <b>10th anniversary</b> of HackIllinois! I led our team of 54 staff members to plan the 3-day event. It was an immensely challenging and even more rewarding experience I will forever be grateful for. Some of my responsibilites included:</p>
                        <ul key="hackillinois-2-1" className="list-disc">
                            <li>Spearheading our overarching vision of increasing accessibility to CS.</li>
                            <li>Working directly with key stakeholders such as venue managers, bus transporation, police & EMT, custodial staff, hotel lodging, and the Grainger College of Engineering</li>
                            <li>Developing sponsorship packages and meeting with sponsors</li>
                            <li>Fostering team cohesion and collaboration across <b>54 team members</b> and 5 subteams</li>
                            <li>Teaching staff the <a href="https://www.youtube.com/watch?v=oaRTMjLdiDw">Dolphin dance</a></li>
                        </ul>
                        <p key="hackillinois-2-2">I am unbelievably grateful to have lead such an incredible team. Our event even had original <b>mobile apps</b> and a stunning <b>website</b>, designed from scratch by our design and systems teams. You can see more of the event at its website below, and also check out a few school articles that we were featured in.</p>
                        <LinkButtonRow key="hackillinois-2-3" linkButtonProps={[{linkUrl:"https://2023.hackillinois.org/", buttonProps:{text: "Event Website"}}, {linkUrl:"https://siebelschool.illinois.edu/news/hackIllinois-celebrates-a-milestone-anniversary-with-its-trademark-energy-enthusiasm", buttonProps:{text: "UIUC CS News"}}, {linkUrl:"https://dailyillini.com/news-stories/2023/02/27/hackillinois-anniversary/", buttonProps:{text: "The Daily Illini"}}]}/>
                    </>
                }
            />
            <H2Subsection
                key="hackillinois-3"
                subsectionTitle="Snapshots"
                subsectionContent={[
                    <p key="hackillinois-3-0">Check out a couple photos of the event below!</p>,
                    <CaptionedImage key="hackillinois-3-1" src="/proj/hack/opening_ceremony.JPG" caption="Attendees watching the HackIllinois Opening Ceremony. Photo by Ashay Parikh."/>,
                    <CaptionedImage key="hackillinois-3-2" src="/proj/hack/food.jpg" caption="HackIllinois staff members serving food to attendees. Photo by Emily Tung."/>,
                    <CaptionedImage key="hackillinois-3-3" src="/proj/hack/code_in_the_dark.jpg" caption="HackIllinois attendees code in a dark, neon-lit room at the long-time favorite event 'Code in the Dark.' Photo by Emily Tung."/>,
                    <CaptionedImage key="hackillinois-3-4" src="/proj/hack/staff.JPG" caption="(Almost) the entire HackIllinois staff. Peek me and my incredible Co-Director Deeya at the bottom! Photo by Ashay Parikh."/>,
                ]}
            />
        </div>
    )
}