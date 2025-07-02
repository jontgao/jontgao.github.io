import H2Subsection from "../components/h2_subsection"
import { LinkButtonRow } from "../components/link_button";
import TLDR from "../components/tldr"
import { CaptionedImage } from "../components/captioned_image";
import FancyList from "../components/fancy_list"

export enum ProjCategories {
  Featured,
  ML,
  SWE,
  Design,
  Leadership,
}

export interface Proj {
    slug: string,
    metaTitle: string,
    metaDesc: string,
    thumbnailRef: string,
    categories?: ProjCategories[],
    tldr?: ProjTLDR,
    content: React.ReactElement[],
}

export interface ProjTLDR {
    skills: string[],
    timeline: string,
    role: string,
    team: string[],
}


const quickStats = [
  {
    title: "Skills",
    items: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Team Members",
    items: ["Alice Smith", "Bob Lee", "Charlie Kim"]
  },
  {
    title: "Timeline",
    items: ["Jan 2024 - Mar 2024"]
  },
  {
    title: "Tools",
    items: ["Figma", "Jira", "GitHub"]
  }
];
export const projData: Proj[] = [
    {
        slug: 'pillowfort',
        metaTitle: '"Pillowfort" Design',
        metaDesc: 'Description 1',
        thumbnailRef: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
        categories: [ ProjCategories.Featured ],
        tldr: { skills: ["skdfj"], timeline: "sldkjfdf", role: "lsdj", team: ["dlsk"]},
        content: [
            <TLDR cols={quickStats}/>,
            <H2Subsection
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={
                    [
                        <p>I made this design for my high school as part of a Hogwarts-esque dorm competition. Our color was purple, and our theme was “Pillowfort,” specifically an etheral, dreamy vibe. Here’s an inside look at the behind the scenes. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version.</p>,
                        <img src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjE1MTk3MDAwMTcyMzE2MTc5/taylor-swift--the-eras-tour---london-uk.jpg"/>,
                        <p>I played around with tons of stock photos to get the perfect ethereal look. Projects like this are my personal favorite. One fun part of this project was that I used Adobe Photoshop’s 3D features to render the text in 3D.</p>,
                        <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/88477c99-c357-4758-a37e-b1b750215b2f/compose?aspectRatio=1.78&format=webp&width=1200"/>,
                        <p>I exported each “layer” of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
                        <p>I am super proud of the final outcome! I loved working with so many forms of digital media to create this piece.</p>
                    ]
                }
            />,
            <H2Subsection
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={
                    [
                        <p>I made this design for my high school as part of a Hogwarts-esque dorm competition. Our color was purple, and our theme was “Pillowfort,” specifically an etheral, dreamy vibe. Here’s an inside look at the behind the scenes. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version.</p>,
                        <img src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjE1MTk3MDAwMTcyMzE2MTc5/taylor-swift--the-eras-tour---london-uk.jpg"/>,
                        <p>I played around with tons of stock photos to get the perfect ethereal look. Projects like this are my personal favorite. One fun part of this project was that I used Adobe Photoshop’s 3D features to render the text in 3D.</p>,
                        <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/88477c99-c357-4758-a37e-b1b750215b2f/compose?aspectRatio=1.78&format=webp&width=1200"/>,
                        <p>I exported each “layer” of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
                        <p>I am super proud of the final outcome! I loved working with so many forms of digital media to create this piece.</p>
                    ]
                }
            />,
        ]
    }, {
        slug: 'hackillinois',
        metaTitle: 'HackIllinois',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023',
        thumbnailRef: '/proj/hack/logo.jpg',
        categories: [ ProjCategories.Featured, ProjCategories.Leadership ],
        tldr: { skills: ["skdfj"], timeline: "June 2022 - June 2023", role: "Co-Director", team: ["54 team members"]},
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
    }, {
        slug: 'page-2',
        metaTitle: 'Pa ge 2',
        metaDesc: 'Description 2',
        thumbnailRef: 'https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=',
        categories: [ ProjCategories.Featured, ProjCategories.Leadership ],
        tldr: { skills: ["skdfj"], timeline: "sldkjfdf", role: "Co-Director", team: ["54 staff members"]},
        content: [
            <TLDR cols={quickStats}/>,
            <H2Subsection
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={
                    [
                        <p>I made this design for my high school as part of a Hogwarts-esque dorm competition. Our color was purple, and our theme was “Pillowfort,” specifically an etheral, dreamy vibe. Here’s an inside look at the behind the scenes. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version.</p>,
                        <img src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjE1MTk3MDAwMTcyMzE2MTc5/taylor-swift--the-eras-tour---london-uk.jpg"/>,
                        <p>I played around with tons of stock photos to get the perfect ethereal look. Projects like this are my personal favorite. One fun part of this project was that I used Adobe Photoshop’s 3D features to render the text in 3D.</p>,
                        <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/88477c99-c357-4758-a37e-b1b750215b2f/compose?aspectRatio=1.78&format=webp&width=1200"/>,
                        <p>I exported each “layer” of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
                        <p>I am super proud of the final outcome! I loved working with so many forms of digital media to create this piece.</p>
                    ]
                }
            />,
            <H2Subsection
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={
                    [
                        <p>I made this design for my high school as part of a Hogwarts-esque dorm competition. Our color was purple, and our theme was “Pillowfort,” specifically an etheral, dreamy vibe. Here’s an inside look at the behind the scenes. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version.</p>,
                        <img src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjE1MTk3MDAwMTcyMzE2MTc5/taylor-swift--the-eras-tour---london-uk.jpg"/>,
                        <p>I played around with tons of stock photos to get the perfect ethereal look. Projects like this are my personal favorite. One fun part of this project was that I used Adobe Photoshop’s 3D features to render the text in 3D.</p>,
                        <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/88477c99-c357-4758-a37e-b1b750215b2f/compose?aspectRatio=1.78&format=webp&width=1200"/>,
                        <p>I exported each “layer” of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
                        <p>I am super proud of the final outcome! I loved working with so many forms of digital media to create this piece.</p>
                    ]
                }
            />,
        ]
    },
]
export const error404ProjData: Proj = {
    slug: 'error-404',
    metaTitle: 'Page Not Found',
    metaDesc: 'Page not found',
    thumbnailRef: 'todo',
    content: [
        <p>We couldn't find that page.</p>,

    ]
}