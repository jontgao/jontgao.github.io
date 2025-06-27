import H2Subsection from "../components/h2_subsection"
import TLDR from "../components/tldr"

export enum ProjCategories {
  Featured,
  ML,
  SWE,
  Design
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
        slug: 'page-1',
        metaTitle: 'Pa ge 1',
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
        slug: 'page-2',
        metaTitle: 'Pa ge 2',
        metaDesc: 'Description 2',
        thumbnailRef: 'https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=',
        categories: [ ProjCategories.Featured, ProjCategories.ML ],
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