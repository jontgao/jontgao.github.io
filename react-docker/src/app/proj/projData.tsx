import H2Subsection from "../components/h2_subsection"
import { LinkButtonRow } from "../components/link_button";
import TLDR from "../components/tldr"
import { CaptionedImage, Caption } from "../components/captioned_image";
import TwoCol from "../components/two_col";

export enum ProjCategories {
  Featured,
  ML,
  SWE,
  Design,
  Leadership,
}
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
        slug: 'siu',
        metaTitle: 'ML @ SIU',
        metaDesc: "I'm currently conducting machine learning research at SIU.",
        thumbnailRef: '/proj/siu/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.ML],
        content: [
            <TLDR key="siu-0" cols={[{title:"Skills",items:["Machine Learning"]}, {title:"Timeline",items:["December 2024 - Present"]}, {title:"Role",items:["Machine Learning Researcher"]}, {title:"Team",items:["LOAD Lab"]}]}/>,
            <p key="siu-1">I'm currently conducting machine learning research at SIU. My work consists in two major areas: online learning for shifting data streams and time-series forecasting. More details coming soon!</p>
        ]
    },
    {
        slug: 'hackillinois',
        metaTitle: 'HackIllinois',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023.',
        thumbnailRef: '/proj/hack/logo.jpg',
        categories: [ProjCategories.Featured, ProjCategories.Leadership],
        content: [
            <TLDR key="hackillinois-0" cols={[{title:"Quick Facts",items:["3-Day Hackathon", "750 attendees", "2 venues"]}, {title:"Timeline",items:["June 2022 - June 2023"]}, {title:"Role",items:["Co-Director"]}, {title:"Team",items:["54 staff members"]}]}/>,
            <CaptionedImage key="hackillinois-1" src="/proj/hack/logo.jpg" caption="A branding image for HackIllinois 2023. Created by the HackIllinois 2023 Design Team."/>,
            <H2Subsection
                key="hackillinois-2"
                subsectionTitle="9 Months of Planning"
                subsectionContent={[
                    <p key="hackillinois-2-0">I had the honor of serving as Co-Director for HackIllinois 2023. In addition to being HackIllinois's <b>return to in-person</b> after two virtual events (due to Covid), it was the <b>10th anniversary</b> of HackIllinois! I led our team of 54 staff members to plan the 3-day event. It was an immensely challenging and even more rewarding experience I will forever be grateful for. Some of my responsibilites included:</p>,
                    <ul key="hackillinois-2-1" className="list-disc">
                        <li>Spearheading our overarching vision of increasing accessibility to CS.</li>
                        <li>Working directly with venue managers, bus transporation, police & EMT, custodial staff, hotel lodging, and the Grainger College of Engineering</li>
                        <li>Developing our sponsorship packages and meeting with sponsors</li>
                        <li>Fostering team cohesion and collaboration across our 54 team members and 5 subteams</li>
                        <li>Teaching our staff the <a href="https://www.youtube.com/watch?v=oaRTMjLdiDw">Dolphin dance</a></li>
                    </ul>,
                    <p key="hackillinois-2-2">I am unbelievably grateful to have lead such an incredible team. Our event even had original <b>mobile apps</b> and a stunning <b>website</b>, designed from scratch by our design and systems teams. You can see more of the event at its website below, and also check out a few school articles that we were featured in.</p>,
                    <LinkButtonRow key="hackillinois-2-3" linkButtonProps={[{linkUrl:"https://2023.hackillinois.org/", buttonProps:{text: "Event Website"}}, {linkUrl:"https://siebelschool.illinois.edu/news/hackIllinois-celebrates-a-milestone-anniversary-with-its-trademark-energy-enthusiasm", buttonProps:{text: "UIUC CS News"}}, {linkUrl:"https://dailyillini.com/news-stories/2023/02/27/hackillinois-anniversary/", buttonProps:{text: "The Daily Illini"}}]}/>
                ]}
            />,
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
            />,
        ]
    },
    {
        slug: 'anl',
        metaTitle: 'Solar Energy Forecasting @ Argonne National Laboratory',
        metaDesc: 'I led our 54-person team to organize a 750-attendee, 3-day in-person HackIllinois 2023',
        thumbnailRef: '/proj/anl/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.ML],
        content: [
            <TLDR key="anl-0" cols={[{title:"Skills",items:["Python", "Tensorflow", "Keras", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Optuna"]}, {title:"Timeline",items:["May 2022 - August 2021"]}, {title:"Role",items:["Machine Learning Intern"]}, {title:"Team",items:["Jonathan Gao", "Supervisors: Raj Sankaran, Bobby Jackson, and Seongha Park"]}]}/>,
            <LinkButtonRow key="anl-1" linkButtonProps={[{linkUrl:"https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting", buttonProps:{text: "Project Github"}}]}/>,
            <H2Subsection
                key="anl-2"
                subsectionTitle="Introduction"
                subsectionContent={[
                    <p key="anl-2-0">During my internship at <b>Argonne National Laboratory</b>, I developed and optimized a <b>recurrent neural network</b> (RNN) model for <b>forecasting solar energy production efficiency</b>. This work supported Argonne's nationwide Sage edge computing initiative, where my model is slated for deployment in hundreds of sensor devices across the United States.</p>,
                    <p key="anl-2-2">To summarize my experience and impact, I</p>,
                    <ul key="anl-2-3" className="list-disc">
                        <li><b>End-to-end trained, optimized, and deployed ML models</b> at a premier national lab.</li>
                        <li>Leveraged Argonne's <b>supercomputing clusters</b> for model training, enabling rapid experimentation with large datasets and complex architectures.</li>
                        <li>Developed <b>edge-ready ML models</b>, tailored for robust performance in distributed sensor networks.</li>
                    </ul>,
                ]}
            />,
            <H2Subsection
                key="anl-3"
                subsectionTitle="Technical Approach"
                subsectionContent={[
                    <p key="anl-3-0">My predictive pipeline leveraged deep learning techniques to predict solar irradiance (a metric of how much solar energy will be produced based on meteorlogical factors) using historical irradiance and cloud coverage data. Energy forecasting, like done here, is a critical challenge for improving the effectiveness of renewable energy systems.</p>,
                    <p key="anl-3-1">I implemented and evaluated multiple RNN architectures, including standard RNNs, LSTMs, and GRUs. Additionally, I sourced, analyzed, and pre-processed around six years of data. This process included:</p>,
                    <ul key="anl-3-2" className="list-disc">
                        <li><b>Sourcing data:</b> I requested and obtained access to relevant datasets.</li>
                        <li><b>Pre-processing:</b> I analyzed and pre-processed datasets for quality and compatibility with time-series architectures. This included identifying lapses in datasets and determining the ideal cleaning methods.</li>
                        <li><b>Training:</b> I explored architectures and integrated frameworks for optimization search, including cell types, number of layer, and layer sizes.</li>
                        <li><b>Evaluation:</b> I benchmarked loss functions to gauge forecast precision for each trial.</li>
                    </ul>,
                    <p key="anl-3-3">To improve performance further, I implemented a Mixture of Experts season-based model (effectively a parent model consisting of four child models, one fine-tuned for each meteorological season).</p>,
                ]}
            />,
            <H2Subsection
                key="anl-4"
                subsectionTitle="Results & Deployment"
                subsectionContent={[
                    <p key="anl-4-0">After extensive training, the best-performing model was a <b>1-layer GRU with 32 neurons</b>. I then turned my focus towards deploying the model for Argonne's Sage network:</p>,
                    <ul key="anl-4-1" className="list-disc">
                        <li><b>Model compression:</b> I compressed the model using TFLite (now known as LiteRT) to enable the model to best perform on edge devices.</li>
                        <li><b>Deployment:</b> I developed and integrated a <a href="https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting">plug-in</a> to deploy the model on edge devices, enabling real-time data collection and on-device inference.</li>
                    </ul>,
                    <p key="anl-4-2">Ultimately, my work at Argonne grew my skills in ML model design, implementation, and deployment in real-world settings. Further, I gained extensive hands-on experience with data pre-processing and handling oh-so-many data quality issues. I am very grateful to have had the opportunity to collaborate with my supervisors in such a high-impact project.</p>,
                    <p key="anl-4-2">While newer architectures are now leading the field in time-series prediction, my work ar Argonne played a critical role in developing an effective forecasting model for time-dependent data, especially with the constraints of edge deployment. As I have continued to learn about the ever-evolving energy field (like with my <a href="/proj/siu">research at SIU</a>), I hope to create further impact in projects like this.</p>,
                    <p key="anl-4-2">My resulting plug-in and poster for my project can be viewed below.</p>,
                    <LinkButtonRow key="anl-1" linkButtonProps={[{linkUrl:"https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting", buttonProps:{text: "Project Github"}}]}/>,
                    <object key="anl-2-5" data="/proj/anl/Gao-Jonathan-SULI-MCS.pdf" type="application/pdf" width="100%" height="720" />,
                ]}
            />,
        ]
    },
    {
        slug: 'google-podcasts',
        metaTitle: 'Google Podcasts UI/UX Redesign',
        metaDesc: "I collaborated in a team of four to redesign the Google Podcasts UI.",
        thumbnailRef: '/proj/google-podcasts/thumbnail.png',
        categories: [ProjCategories.Design],
        content: [
            <TLDR key="google-podcasts-0" cols={[{title:"Skills",items:["UI/UX", "Figma"]}, {title:"Timeline",items:["Fall 2021"]}, {title:"Role",items:["UI/UX Designer"]}, {title:"Team",items:["Alex Rotberg (Lead)", "Jonathan Gao", "Chase Monmany", "Katie Li"]}]}/>,
            <H2Subsection
                key="google-podcasts-1"
                subsectionTitle="Easy Listening"
                subsectionContent={[
                    <p key="google-podcasts-1-0">I collaborated in a team of four to redesign the Google Podcasts app's UI. This included a full analysis with user research, mindmapping, user personas and journeys, etc. I haven't had time to write out a full case analysis yet, but I still wanted to share the results! Our primary goal was to make the UI more intuitive and aesthetically pleasing. We also wanted to add to the functionality of the app, introducing features such as playlists, search filtering, and sorting. My team also designed a revised onboarding and social features. Though I didn't create those UI designs, I ideated the process and designs with them.</p>,
                    <p key="google-podcasts-1-1">This was my very first introduction to the world of UI/UX and Figma. It was a very collaborative process, and I enjoyed it immensely. Below are (almost) all the screens I designed, with a look at the original design by Google, my lofi design and reiteration, and the final hifi design.</p>,
                    <CaptionedImage key="google-podcasts-1-2" src="/proj/google-podcasts/explore.png" caption="The original design, lofi designs, and hifi design of the explore page." />,
                    <CaptionedImage key="google-podcasts-1-3" src="/proj/google-podcasts/filters.png" caption="The original design, lofi designs, and hifi design of the filters page." />,
                    <CaptionedImage key="google-podcasts-1-4" src="/proj/google-podcasts/episodes.png" caption="The original design, lofi designs, and hifi design of the episodes page." />,
                    <CaptionedImage key="google-podcasts-1-5" src="/proj/google-podcasts/shows.png" caption="The original design, lofi designs, and hifi design of the shows page." />,
                    <CaptionedImage key="google-podcasts-1-6" src="/proj/google-podcasts/playlists.png" caption="The original design, lofi designs, and hifi design of the playlists page." />,
                ]}
            />,
        ]
    },
    {
        slug: 'diffusion-mnist',
        metaTitle: 'Diffusion Number Generation',
        metaDesc: 'I implemented and trained a diffusion model to generate images of numbers.',
        thumbnailRef: '/proj/diffusion-mnist/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.ML],
        content: [
            <TLDR key="diffusion-mnist-0" cols={[{title:"Skills",items:["Python", "PyTorch", "Matplotlib"]}, {title:"Timeline",items:["Spring 2025"]}, {title:"Team",items:["Jonathan Gao"]}]}/>,
            <H2Subsection
                key="diffusion-mnist-1"
                subsectionTitle="Diffusion"
                subsectionContent={[
                    <p key="diffusion-mnist-1-0">For my Computer Vision class (CS444 at UIUC), I implemented and trained a diffusion model to generate images of numbers. This project was my first hands-on experience with diffusion models—a state-of-the-art generative approach recently popularized by systems like DALL-E and Stable Diffusion. Building the model from scratch, I deepened my understanding of both theoretical and practical aspects of modern generative AI.</p>,
                    <CaptionedImage key="diffusion-mnist-1-1" src="/proj/diffusion-mnist/thumbnail.png" caption="" />,
                    <p key="diffusion-mnist-1-2">Diffusion models operate by progressively adding noise to training images and learning to reverse this process, effectively "denoising" an image to recover or generate meaningful content. My implementation was based on the foundational work by <a href="https://arxiv.org/abs/2006.11239">Ho et. al</a>, which introduced a principled framework for training such models. We take a dataset of images (in this case, the <a href="https://www.kaggle.com/datasets/hojjatk/mnist-dataset">MNIST dataset</a> of handwritten numbers) and slowly add noise to the image. We train the diffusion model to "denoise" the noisy image to approximate the original image. After training, we input an image of complete noise to the model. Using the same process of denoising, the model effectively generates an image of a handwritten digit.</p>,
                    <p key="diffusion-mnist-1-3">Initially, I built a simple variant that denoised images corrupted with 50% random noise in a single step—this helped me validate the core data pipeline and model structure.</p>,
                    <CaptionedImage key="diffusion-mnist-1-4" src="/proj/diffusion-mnist/denoising.png" caption="Denoising images. The left column shows the original image, and the middle shows the image with 50% noise. The right column shows the model's approximation of the original image." />,
                    <p key="diffusion-mnist-1-5">After this warmup, I enhanced the model to perform iterative denoising across multiple timesteps, allowing it to transform pure noise into plausible digit images. The results after 20 epochs showcased the model's ability to gradually synthesize digit-like images from random inputs.</p>,
                    <CaptionedImage key="diffusion-mnist-1-6" src="/proj/diffusion-mnist/time_conditioned_epoch20.png" caption="The results of iteratively denoising an image." />,
                    <p key="diffusion-mnist-1-7">To further improve realism and control, I incorporated conditional generation—providing the target digit label during training and specifying it during inference. This adjustment allowed the model to generate images corresponding to specific digits on demand, dramatically increasing output quality and relevance.</p>,
                    <CaptionedImage key="diffusion-mnist-1-8" src="/proj/diffusion-mnist/class_conditioned_epoch20.png" caption="The final results of the diffusion model." />,
                    <p key="diffusion-mnist-1-9">Working on this project was deeply rewarding, as it connected course concepts to emerging real-world applications. While my implementation remains a simplified proof-of-concept (training requires a lot of expensive computing power!), it reflects key principles behind today's most advanced image generation systems.</p>,
                ]}
            />,
        ]
    },
    {
        slug: 'foh',
        metaTitle: 'Filter of Hope Mission Trip',
        metaDesc: 'I went door-to-door installing life-changing water filters and connecting with local families.',
        thumbnailRef: '/proj/foh/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.Leadership],
        content: [
            <H2Subsection
                key="foh-0"
                subsectionTitle="The Gift of Clean Water"
                subsectionContent={[
                    <p key="foh-0-0">I went on two week-long Filter of Hope mission trips to different cities in a Caribbean country, one in 2022 and one in 2024. During the mission trip, we team up with a local church and translators to go door-to-door to connect personally with families and install life-changing water filters. This country's culture is so beautiful and welcoming, and it was truly an honor to spread even just the smallest drop of hope to such a beautiful people.</p>,
                    <p key="foh-0-1">To attend the trip, I support raised (essentially: asking people to donate you money) over a thousand dollars in funds both years. That in and of itself was a new and frightening experience, but I learned a lot through it and would encourage anyone holding back from going on a trip like this to dive in!</p>,
                    <p key="foh-0-2">We had truly the most gracious hosts, and were lucky enough to eat incredibly delicious food every day, even though food is in limited supply there. Over the course of my two trips, I got to see three different parts of the country, and every part is so incredibly beautiful. It's an experience I treasure. If you would like to get involved or donate, learn more about <a href="https://filterofhope.org/">Filter of Hope</a>.</p>,
                    <p key="foh-0-3">Check out some photos below!</p>,
                ]}
            />,
            <H2Subsection
                key="foh-1"
                subsectionTitle="2022"
                subsectionContent={[
                    <CaptionedImage key="foh-1-0" src="/proj/foh/2022/PXL_20220314_161216028.jpg" caption="A family we shared a filter with. The man in the pink shirt has THE MOST adorable kid, and we were able to gift them lots of toys!" />,
                    <CaptionedImage key="foh-1-1" src="/proj/foh/2022/IMG_1202.jpg" caption="Prayer on a rooftop overlooking the city." />,
                    <CaptionedImage key="foh-1-2" src="/proj/foh/2022/IMG_5673.jpeg" caption="A family we installed a filter for. I remember they were really invested in their TV show, so much so that they would pause our conversation for important scenes 😆." />,
                    <CaptionedImage key="foh-1-3" src="/proj/foh/2022/PXL_20220313_115023149.jpg" caption="A view of the city from our residence. It remains one of the most beautiful places I've been to." />,
                ]}
            />,
            <H2Subsection
                key="foh-2"
                subsectionTitle="2024"
                subsectionContent={[
                    <CaptionedImage key="foh-2-0" src="/proj/foh/2024/IMG_2879.jpg" caption="A woman we installed a filter for. Her house was on this hill with a stunning view. I also remember my teammate accidentally spilt a ton of water while installing the filter." />,
                    <CaptionedImage key="foh-2-1" src="/proj/foh/thumbnail.png" caption="A super sweet family we shared a filter with. This family had so many kids! The little girl in the stroller was disabled, and she also had the most adorable smile. I remember playing with little knick-knacks we had brought with the kids." />,
                    <CaptionedImage key="foh-2-2" src="/proj/foh/2024/IMG_2096.jpg" caption="The team at our home camp!" />,
                    <CaptionedImage key="foh-2-3" src="/proj/foh/2024/IMG_4871.jpg" caption="Showing a woman how to clean the water filter." />,
                    <CaptionedImage key="foh-2-4" src="/proj/foh/2024/IMG_8631.jpg" caption="The country we were in had frequent blackouts (probably the majority of the time) due to limited electrical supply. As such, many of our evening team meetings were in the dark." />,
                ]}
            />,
        ]
    },
    {
        slug: 'cisteme365',
        externalLink: 'https://github.com/junevanlerberghe/CISTEME365',
        metaTitle: 'Educational Game Development @ UIUC',
        metaDesc: '',
        thumbnailRef: '/proj/cisteme365/thumbnail.png',
        categories: [ProjCategories.Featured, ProjCategories.SWE],
        content: []
    },
    {
        slug: 'pillowfort',
        metaTitle: '"Pillowfort" Design',
        metaDesc: "I made this ethereal design for my high school's Hogwarts-esque dorm competition.",
        thumbnailRef: '/proj/pillowfort/thumbnail.png',
        categories: [ProjCategories.Design],
        content: [
            <TLDR key="pillowfort-0" cols={[{title:"Skills",items:["Adobe Photoshop", "Adobe After Effects"]}, {title:"Role",items:["Designer", "Animator"]}]}/>,
            <video
                key="pillowfort-1"
                controls
                loop
                playsInline
                className="w-full"
            >
                <source src="/proj/pillowfort/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>,
            <H2Subsection
                key="pillowfort-2"
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={[
                    <p key="pillowfort-2-0">I made this design for my high school's Hogwarts-esque dorm competition. Our color was purple, and our theme was “Pillowfort,” which was our silly way of expressing an etheral, dreamy vibe. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version. This was one of those magical times as an artist where I immediately knew my creative vision going into the project—it felt like the design already existed, and I just had to fit the pieces together.</p>,
                    // TODO: add sketch
                    <p key="pillowfort-2-1">To make this design, I meshed together a ton of stock photos to create the ethereal landscape I envisioned. I should say I didn't use AI at all in this project; generative AI hadn't even hit the mainstream yet!</p>,
                    <CaptionedImage key="pillowfort-2-2" src="/proj/pillowfort/composite_preview.png" caption="Examples of some of the source images used and where they were included in the design. I feel the need to say I don't normally throw my jackets around; I used the jacket as a greenscreen for my pants." />,
                    <p key="pillowfort-2-3">One fun part of this project was that I used Adobe Photoshop's 3D features to render the text in 3D. Fun fact: the 3D features I used are actually no longer available in Photoshop!</p>,
                    <CaptionedImage key="pillowfort-2-4" src="/proj/pillowfort/text.gif" caption="Progress of the titular text, including 3D extrusion and rendering, replacing the front face, and lighting effects." />,
                    <p key="pillowfort-2-5">I exported each “layer” of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
                    <video
                        key="pillowfort-2-6"
                        controls
                        loop
                        playsInline
                        className="w-full"
                    >
                        <source src="/proj/pillowfort/3d.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>,
                    <p key="pillowfort-2-7">As a final touch, I edited and added a short audio clip of ocean waves. I am super proud of the final outcome! I loved working with so many forms of digital media to create this piece.</p>,
                    <p key="pillowfort-2-8" className="text-style-card-subtitle">Stock image & audio credits: Adrianna Calvo, Cindy Gustafson, Daniel Kux, David Kopacz, Eberhard Grossgasteiger, Elina Sazonova, Iconcom, Jess Vide, Nick Bondarev, Noted451, Pixabay, Rachel Claire, Ruvim, Samuel Walker, Szabó Viktor, Tobias Bjørkli</p>,
                ]}
            />,
        ]
    },
    {
        slug: 'neural-trans',
        metaTitle: 'Neural Translation',
        metaDesc: "I implemented and trained a transformer for neural translation.",
        thumbnailRef: '/proj/neural-trans/thumbnail.png',
        categories: [ProjCategories.ML],
        content: [
            <TLDR key="neural-trans-0" cols={[{title:"Skills",items:["Python", "PyTorch"]}, {title:"Timeline",items:["Spring 2025"]}, {title:"Team",items:["Jonathan Gao"]}]}/>,
            <h2 key="neural-trans-1">Coming soon!</h2>
            // <p key="neural-trans-2">For my Natural Language Processing class, we explored methods for neural translation. </p>,
            // <p key="neural-trans-3">In beam search decoding, we </p>,
            // <H2Subsection
            //     key="neural-trans-4"
            //     subsectionTitle="RNN-Based"
            //     subsectionContent={[
            //         <p key="neural-trans-4-0"></p>,
            //         <CaptionedImage key="neural-trans-4-1" src="/proj/neural-trans/" caption="" />,
            //     ]}
            // />,
        ]
    },
    {
        slug: 'midwest-energy',
        externalLink: 'https://github.com/jontgao/energao',
        metaTitle: 'Android Frontend @ Midwest Energy Group',
        metaDesc: '',
        thumbnailRef: '/proj/midwest-energy/thumbnail.png',
        categories: [ProjCategories.SWE, ProjCategories.Design],
        content: []
    },
    {
        slug: 'hackstart',
        externalLink: 'https://hackstart.hackillinois.org/',
        metaTitle: 'HackStart',
        metaDesc: '',
        thumbnailRef: '/proj/hackstart/thumbnail.png',
        categories: [ProjCategories.Leadership],
        content: []
    },
    {
        slug: 'beatdrop',
        externalLink: 'https://github.com/CS222-UIUC/BeatDrop',
        metaTitle: 'BeatDrop Rhythm Game',
        metaDesc: '',
        thumbnailRef: '/proj/beatdrop/thumbnail.png',
        categories: [ProjCategories.SWE],
        content: []
    },
    {
        slug: 'misc-graphic',
        metaTitle: 'Misc. Graphic Designs',
        metaDesc: "This is some of my graphic designs work (mostly for social media) from the past several years.",
        thumbnailRef: '/proj/misc-graphic/turkeyrun.png',
        categories: [ProjCategories.Design],
        content: [
            <H2Subsection
                key="misc-graphic-0"
                subsectionTitle="Endless Sketchpad"
                subsectionContent={[
                    <p key="misc-graphic-0-0">Since self-learning Photoshop when I was around 10, I've fallen in love with graphic design. To me, graphic design feels like an endless sketchpad: there's always more space and styles and so, so much more to explore. Here are some of those scribbles.</p>,
                    <TwoCol
                        key="misc-graphic-0-1"
                        left={<Caption caption="Adobe Photoshop. 2019. A profile picture design for my dorm.">
                                <video controls loop playsInline className="w-full"><source src="/proj/misc-graphic/roadtrip.mp4" type="video/mp4" /> Your browser does not support the video tag.</video>
                            </Caption>}
                        right={<Caption caption="Adobe Photoshop, Adobe After Effects, Adobe Illutrator. 2020. A profile picture design for my dorm.">
                                <video controls loop playsInline className="w-full"><source src="/proj/misc-graphic/error404.mp4" type="video/mp4" /> Your browser does not support the video tag.</video>
                            </Caption>}
                        leftFraction="1/2"
                    />,
                    <CaptionedImage key="misc-graphic-0-2" src="/proj/misc-graphic/turkeyrun.png" caption="Adobe Illustrator. 2023. A promotional social media graphic for a club." />,
                    <CaptionedImage key="misc-graphic-0-3" src="/proj/misc-graphic/springfling.jpg" caption='Adobe Photoshop. 2019. An "Avengers Endgame"-styled logo I made for a school dance.' />,
                    <CaptionedImage key="misc-graphic-0-4" src="/proj/misc-graphic/happy_holidays.gif" caption="Adobe Photoshop. 2019. A promotional social media graphic for a club." />,
                    <CaptionedImage key="misc-graphic-0-5" src="/proj/misc-graphic/graceupongrace.jpg" caption="Adobe Illustrator. 2023. Wall art." />,
                    <CaptionedImage key="misc-graphic-0-6" src="/proj/misc-graphic/roadtrip_shirt.png" caption="Adobe Illustrator. 2019. A shirt design for my dorm. Designed with Luke Knutson." />,
                    <CaptionedImage key="misc-graphic-0-7" src="/proj/misc-graphic/super.jpg" caption="Adobe Photoshop, Adobe Illustrator. 2023. Wall art." />,
                    // <CaptionedImage key="misc-graphic-0-8" src="/proj/misc-graphic/tedx.jpg" caption="Adobe Illustrator, Adobe Photoshop. 2019. A poster design for my high school's very first TEDx conference." />,
                    <CaptionedImage key="misc-graphic-0-9" src="/proj/misc-graphic/skate.png" caption="Adobe Illustrator. 2023. A promotional social media graphic for a club." />,
                    <CaptionedImage key="misc-graphic-0-10" src="/proj/misc-graphic/daytreat.jpg" caption="Adobe Illustrator. 2023. A promotional social media graphic for a club." />,
                ]}
            />,
        ]
    }
]

export const error404ProjData: Proj = {
    slug: 'error-404',
    metaTitle: 'Page Not Found',
    metaDesc: 'Page not found',
    thumbnailRef: '',
    categories: [],
    content: [
        <>
            <CaptionedImage key="error-404-1" src="/proj/pikachu.gif" caption="Pikachu attacking—and crashing into—a tree." />
            <p key="error-404-2">This page is a blank space.</p>
        </>
    ]
}