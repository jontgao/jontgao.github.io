import H2Subsection from "../components/h2_subsection"
import { LinkButtonRow } from "../components/link_button";
import TLDR from "../components/tldr"
import { CaptionedImage } from "../components/captioned_image";
import TwoCol from "../components/two_col";

export enum ProjCategories {
  Featured,
  All,
  ML,
  SWE,
  Design,
  Leadership,
}

export interface Proj {
    slug: string,
    externalLink?: string, // if given, replaces slug
    metaTitle: string,
    metaDesc: string,
    thumbnailRef: string,
    categories: ProjCategories[],
    content: React.ReactElement[],
}

export interface ProjTLDR {
    skills: string[],
    timeline: string,
    role: string,
    team: string[],
}

export const projData: Proj[] = [
    {
        slug: 'pillowfort',
        metaTitle: '"Pillowfort" Design',
        metaDesc: "I made this ethereal design for my high school's Hogwarts-esque dorm competition.",
        thumbnailRef: '/proj/pillowfort/thumbnail.png',
        categories: [ ProjCategories.Featured, ProjCategories.All, ProjCategories.Design ],
        content: [
            <TLDR cols={[{title:"Skills",items:["Adobe Photoshop", "Adobe After Effects"]}, {title:"Role",items:["Designer", "Animator"]}]}/>,
            <video
                controls
                loop
                playsInline
                className="w-full"
            >
                <source src="/proj/pillowfort/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>,
            <H2Subsection
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={
                    [
                        <p>I made this design for my high school's Hogwarts-esque dorm competition. Our color was purple, and our theme was “Pillowfort,” which was our silly way of expressing an etheral, dreamy vibe. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version. This was one of those magical times as an artist where I immediately knew my creative vision going into the project—it felt like the design already existed, and I just had to fit the pieces together.</p>,
                        // TODO: add sketch
                        <p>To make this design, I meshed together a ton of stock photos to create the ethereal landscape I envisioned. I should say I didn't use AI at all in this project; generative AI hadn't even hit the mainstream yet!</p>,
                        <CaptionedImage src="/proj/pillowfort/composite_preview.png" caption="Examples of some of the source images used and where they were included in the design. I feel the need to say I don't normally throw my jackets around; I used the jacket as a greenscreen for my pants." />,
                        <p>One fun part of this project was that I used Adobe Photoshop's 3D features to render the text in 3D. Fun fact: the 3D features I used are actually no longer available in Photoshop!</p>,
                        <CaptionedImage src="/proj/pillowfort/text.gif" caption="Progress of the titular text, including 3D extrusion and rendering, replacing the front face, and lighting effects." />,
                        <p>I exported each “layer” of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
                        <video
                            controls
                            loop
                            playsInline
                            className="w-full"
                        >
                            <source src="/proj/pillowfort/3d.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>,
                        <p>As a final touch, I edited and added a short audio clip of ocean waves. I am super proud of the final outcome! I loved working with so many forms of digital media to create this piece.</p>,
                        <p className="text-style-card-subtitle">Stock image & audio credits: Adrianna Calvo, Cindy Gustafson, Daniel Kux, David Kopacz, Eberhard Grossgasteiger, Elina Sazonova, Iconcom, Jess Vide, Nick Bondarev, Noted451, Pixabay, Rachel Claire, Ruvim, Samuel Walker, Szabó Viktor, Tobias Bjørkli</p>,
                    ]
                }
            />,
        ]
    },
    {
        slug: 'hackillinois',
        metaTitle: 'HackIllinois',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023',
        thumbnailRef: '/proj/hack/logo.jpg',
        categories: [ ProjCategories.Featured, ProjCategories.All, ProjCategories.Leadership ],
        content: [
            <TLDR cols={ [{title:"Quick Facts",items:["3-Day Hackathon", "750 attendees", "2 venues"]}, {title:"Timeline",items:["June 2022 - June 2023"]}, {title:"Role",items:["Co-Director"]}, {title:"Team",items:["54 staff members"]}] }/>,
            <H2Subsection
                subsectionTitle="9 Months of Planning"
                subsectionContent={
                    [
                        <p>I had the honor of serving as Co-Director for HackIllinois 2023. In addition to being HackIllinois's <b>return to in-person</b> after two virtual events (due to Covid), it was the <b>10th anniversary</b> of HackIllinois! I led our team of 54 staff members to plan the 3-day event. It was an immensely challenging and even more rewarding experience I will forever be grateful for. Some of my responsibilites included:</p>,
                        <ul className="list-disc">
                            <li>Spearheading our overarching vision of increasing accessibility to CS.</li>
                            <li>Working directly with venue managers, bus transporation, police & EMT, custodial staff, hotel lodging, and the Grainger College of Engineering</li>
                            <li>Developing our sponsorship packages and meeting with sponsors</li>
                            <li>Fostering team cohesion and collaboration across our 54 team members and 5 subteams</li>
                            <li>Teaching our staff the <a href="https://www.youtube.com/watch?v=oaRTMjLdiDw">Dolphin dance</a></li>
                        </ul>,

                        <p>I am unbelievably grateful to have lead such an incredible team. Our event even had original <b>mobile apps</b> and a stunning <b>website</b>, designed from scratch by our design and systems teams. You can see more of the event at its website below, and also check out a few school articles that we were featured in.</p>,
                        <LinkButtonRow linkButtonProps={[{linkUrl:"https://2023.hackillinois.org/", buttonProps:{text: "Event Website"}}, {linkUrl:"https://siebelschool.illinois.edu/news/hackIllinois-celebrates-a-milestone-anniversary-with-its-trademark-energy-enthusiasm", buttonProps:{text: "UIUC CS News"}}, {linkUrl:"https://dailyillini.com/news-stories/2023/02/27/hackillinois-anniversary/", buttonProps:{text: "The Daily Illini"}}]}/>
                    ]
                }
            />,
            <H2Subsection
                subsectionTitle="Snapshots"
                subsectionContent={
                    [
                        <p>Check out a couple photos of the event below!</p>,
                        <CaptionedImage src="/proj/hack/opening_ceremony.jpg" caption="Attendees watching the HackIllinois Opening Ceremony. Photo by Ashay Parikh."/>,
                        <CaptionedImage src="/proj/hack/food.jpg" caption="HackIllinois staff members serving food to attendees. Photo by Emily Tung."/>,
                        <CaptionedImage src="/proj/hack/code_in_the_dark.jpg" caption="HackIllinois attendees code in a dark, neon-lit room at the long-time favorite event 'Code in the Dark.' Photo by Emily Tung."/>,
                        <CaptionedImage src="/proj/hack/staff.jpg" caption="(Almost) the entire HackIllinois staff. Peek me and my incredible Co-Director Deeya at the bottom! Photo by Ashay Parikh."/>,
                    ]
                }
            />,
        ]
    },
    {
        slug: 'cisteme365',
        externalLink: 'https://github.com/junevanlerberghe/CISTEME365',
        metaTitle: 'Educational Game for CISTEME365',
        metaDesc: '',
        thumbnailRef: '/proj/cisteme365/thumbnail.png',
        categories: [ ProjCategories.All, ProjCategories.Featured, ProjCategories.SWE ],
        content: []
    },
    {
        slug: 'beatdrop',
        externalLink: 'https://github.com/CS222-UIUC/BeatDrop',
        metaTitle: 'BeatDrop Rhythm Game',
        metaDesc: '',
        thumbnailRef: '/proj/beatdrop/thumbnail.png',
        categories: [ ProjCategories.All, ProjCategories.SWE ],
        content: []
    },
    {
        slug: 'hackstart',
        externalLink: 'https://hackstart.hackillinois.org/',
        metaTitle: 'HackStart',
        metaDesc: '',
        thumbnailRef: '/proj/hackstart/thumbnail.png',
        categories: [ ProjCategories.All, ProjCategories.Leadership ],
        content: []
    },
    {
        slug: 'anl',
        metaTitle: 'Solar Energy Forecasting @ Argonne National Laboratory',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023',
        thumbnailRef: '/proj/anl/thumbnail.png',
        categories: [ ProjCategories.All, ProjCategories.Featured, ProjCategories.ML ],
        content: [
            <TLDR cols={ [{title:"Skills",items:["Python", "Tensorflow", "Keras", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Optuna"]}, {title:"Timeline",items:["May 2022 - August 2021"]}, {title:"Role",items:["Machine Learning Intern"]}, {title:"Team",items:["Jonathan Gao", "Supervisors: Raj Sankaran, Bobby Jackson, and Seongha Park"]}] }/>,
            <LinkButtonRow linkButtonProps={[{linkUrl:"https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting", buttonProps:{text: "Project Github"}}]}/>,
            <H2Subsection
            subsectionTitle="About"
            subsectionContent={[
                    <p>I interned at Argonne National Laboratory to train, optimize, and productionize a recurrent neural network to forecast solar energy production efficiency. I was very excited to train my model on one of Argonne's supercomputing clusters 😁. My model is to be used in over a hundred devices across the country as part of Argonne National Laboratory's Sage edge computing project.</p>,
                    <p>Check out my poster below!</p>,
                    <object data="/proj/anl/Gao-Jonathan-SULI-MCS.pdf" type="application/pdf" width="100%" height="720" />,
                ]}
            />,
        ]
    },
]
export const error404ProjData: Proj = {
    slug: 'error-404',
    metaTitle: 'Blank Space',
    metaDesc: 'Page not found',
    thumbnailRef: '',
    content: [
        <p>I'm sorry, the page you're looking for cannot be found.</p>,

    ]
}