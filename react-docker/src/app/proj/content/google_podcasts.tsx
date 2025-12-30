import H2Subsection from "../../components/h2_subsection"
import TLDR from "../../components/tldr"
import { CaptionedImage } from "../../components/captioned_image";

export default function ContentGooglePodcasts() {
    return (
        <div className="proj-content-styles">
            <TLDR key="google-podcasts-0" cols={[{title:"Skills",items:["UI/UX", "Figma"]}, {title:"Timeline",items:["Fall 2021"]}, {title:"Role",items:["UI/UX Designer"]}, {title:"Team",items:["Alex Rotberg (Lead)", "Jonathan Gao", "Chase Monmany", "Katie Li"]}]}/>
            <H2Subsection
                key="google-podcasts-1"
                subsectionTitle="Easy Listening"
                subsectionContent={[
                    <p key="google-podcasts-1-0">I collaborated in a team of four to redesign the Google Podcasts app's UI. This included a full analysis with user research, mindmapping, user personas and journeys, etc. I haven't had time to write out a full case analysis yet, but I still wanted to share the results! Our primary goal was to make the UI more intuitive and aesthetically pleasing. We also wanted to add to the functionality of the app, introducing features such as playlists, search filtering, and sorting. I also collaboratively ideated, designed, and polished revised onboarding and social features.</p>,
                    <p key="google-podcasts-1-1">This was my very first introduction to the world of UI/UX and Figma. It was a very collaborative process, and I enjoyed it immensely. Below are (almost) all the screens I designed, with a look at the original design by Google, my lofi design and reiteration, and the final hifi design.</p>,
                    <CaptionedImage key="google-podcasts-1-2" src="/proj/google-podcasts/explore.png" caption="The original design, lofi designs, and hifi design of the explore page." />,
                    <CaptionedImage key="google-podcasts-1-3" src="/proj/google-podcasts/filters.png" caption="The original design, lofi designs, and hifi design of the filters page." />,
                    <CaptionedImage key="google-podcasts-1-4" src="/proj/google-podcasts/episodes.png" caption="The original design, lofi designs, and hifi design of the episodes page." />,
                    <CaptionedImage key="google-podcasts-1-5" src="/proj/google-podcasts/shows.png" caption="The original design, lofi designs, and hifi design of the shows page." />,
                    <CaptionedImage key="google-podcasts-1-6" src="/proj/google-podcasts/playlists.png" caption="The original design, lofi designs, and hifi design of the playlists page." />,
                ]}
            />
        </div>
    )
}