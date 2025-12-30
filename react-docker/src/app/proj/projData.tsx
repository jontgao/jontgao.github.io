///////////////////////////////////////////////////
// Project Data
///////////////////////////////////////////////////
import ContentHackIllinois from "./content/hackillinois";
import ContentAnl from "./content/anl";
import ContentFoh from "./content/foh";
import ContentSiu from "./content/siu";
import ContentGooglePodcasts from "./content/google_podcasts";
import ContentDiffusionMnist from "./content/diffusion_mnist";
import ContentPillowfort from "./content/pillowfort";
import ContentNeuralTrans from "./content/neural_trans";
import ContentMiscGraphic from "./content/misc_graphic";
import ContentError404 from "./content/error_404";

export const contentBySlug: Record<string, React.ComponentType> = {
    'hackillinois': ContentHackIllinois,
    'anl': ContentAnl,
    'foh': ContentFoh,
    'siu': ContentSiu,
    'google-podcasts': ContentGooglePodcasts,
    'diffusion-mnist': ContentDiffusionMnist,
    'pillowfort': ContentPillowfort,
    'neural-trans': ContentNeuralTrans,
    'misc-graphic': ContentMiscGraphic,
    'error-404': ContentError404,
}

export enum ProjCategories {
  Featured,
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
}

export interface ProjTLDR {
    skills: string[],
    timeline: string,
    role: string,
    team: string[],
}

export const projData: Proj[] = [
    {
        slug: 'siu',
        metaTitle: 'ML @ SIU',
        metaDesc: "I'm currently conducting machine learning research at SIU.",
        thumbnailRef: '/proj/siu/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.ML],
    },
    {
        slug: 'hackillinois',
        metaTitle: 'HackIllinois',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023.',
        thumbnailRef: '/proj/hack/logo.jpg',
        categories: [ProjCategories.Featured, ProjCategories.Leadership]
    },
    {
        slug: 'anl',
        metaTitle: 'Solar Energy Forecasting @ Argonne National Laboratory',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023',
        thumbnailRef: '/proj/anl/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.ML],
    },
    {
        slug: 'google-podcasts',
        metaTitle: 'Google Podcasts UI/UX Redesign',
        metaDesc: "I collaborated in a team of four to redesign the Google Podcasts UI.",
        thumbnailRef: '/proj/google-podcasts/thumbnail.png',
        categories: [ProjCategories.Design],
    },
    {
        slug: 'diffusion-mnist',
        metaTitle: 'Diffusion Number Generation',
        metaDesc: 'I implemented and trained a diffusion model to generate images of numbers.',
        thumbnailRef: '/proj/diffusion-mnist/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.ML],
    },
    {
        slug: 'foh',
        metaTitle: 'Filter of Hope Mission Trip',
        metaDesc: 'I went door-to-door installing life-changing water filters and connecting with local families.',
        thumbnailRef: '/proj/foh/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.Leadership],
    },
    {
        slug: 'cisteme365',
        externalLink: 'https://github.com/junevanlerberghe/CISTEME365',
        metaTitle: 'Educational Game Development @ UIUC',
        metaDesc: '',
        thumbnailRef: '/proj/cisteme365/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.SWE],
    },
    {
        slug: 'pillowfort',
        metaTitle: '"Pillowfort" Design',
        metaDesc: "I made this ethereal design for my high school's Hogwarts-esque dorm competition.",
        thumbnailRef: '/proj/pillowfort/thumbnail.png',
        categories: [ProjCategories.Design],
    },
    {
        slug: 'neural-trans',
        metaTitle: 'Neural Translation',
        metaDesc: "I implemented and trained a transformer for neural translation.",
        thumbnailRef: '/proj/neural-trans/thumbnail.png',
        categories: [ProjCategories.ML],
    },
    {
        slug: 'midwest-energy',
        externalLink: 'https://github.com/jontgao/energao',
        metaTitle: 'Android Frontend @ Midwest Energy Group',
        metaDesc: '',
        thumbnailRef: '/proj/midwest-energy/thumbnail.png',
        categories: [ProjCategories.SWE, ProjCategories.Design],
    },
    {
        slug: 'hackstart',
        externalLink: 'https://hackstart.hackillinois.org/',
        metaTitle: 'HackStart',
        metaDesc: '',
        thumbnailRef: '/proj/hackstart/thumbnail.png',
        categories: [ProjCategories.Leadership],
    },
    {
        slug: 'beatdrop',
        externalLink: 'https://github.com/CS222-UIUC/BeatDrop',
        metaTitle: 'BeatDrop Rhythm Game',
        metaDesc: '',
        thumbnailRef: '/proj/beatdrop/thumbnail.png',
        categories: [ProjCategories.SWE],
    },
    {
        slug: 'misc-graphic',
        metaTitle: 'Misc. Graphic Designs',
        metaDesc: "This is some of my graphic designs work (mostly for social media) from the past several years.",
        thumbnailRef: '/proj/misc-graphic/turkeyrun.png',
        categories: [ProjCategories.Design],
    }
]

export const error404ProjData: Proj = {
    slug: 'error-404',
    metaTitle: 'Page Not Found',
    metaDesc: 'Page not found',
    thumbnailRef: '',
    categories: [],
}

///////////////////////////////////////////////////
// Project Filters
///////////////////////////////////////////////////
export const projFilters = [
  {
    text: "Featured",
    categories: [ProjCategories.Featured],
  },
//   {
//     text: "All",
//     categories: Object.values(ProjCategories),
//   },
  {
    text: "AI/ML",
    categories: [ProjCategories.ML],
  },
  {
    text: "Software Engineering",
    categories: [ProjCategories.SWE],
  },
  {
    text: "Design",
    categories: [ProjCategories.Design],
  },
  {
    text: "Other",
    categories: [ProjCategories.Leadership],
  },
]
export const DEFAULT_PROJFILTER = {text: "Featured", categories: [ProjCategories.Featured],}