import H2Subsection from "../../components/h2_subsection"
import TLDR from "../../components/tldr"
import { CaptionedImage } from "../../components/captioned_image";

export default function ContentPillowfort() {
    return (
        <div className="proj-content-styles">
            <TLDR key="pillowfort-0" cols={[{title:"Skills",items:["Adobe Photoshop", "Adobe After Effects"]}, {title:"Role",items:["Designer", "Animator"]}]}/>
            <video
                key="pillowfort-1"
                controls
                loop
                playsInline
                className="w-full"
            >
                <source src="/proj/pillowfort/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <H2Subsection
                key="pillowfort-2"
                subsectionTitle="Behind-the-Scenes"
                subsectionContent={[
                    <p key="pillowfort-2-0">I made this design for my high school's Hogwarts-esque dorm competition. Our color was purple, and our theme was "Pillowfort," which was our silly way of expressing an etheral, dreamy vibe. I first sketched a couple designs in my bullet journal, and then used Photoshop to create an unanimated version. This was one of those magical times as an artist where I immediately knew my creative vision going into the project—it felt like the design already existed, and I just had to fit the pieces together.</p>,
                    // TODO: add sketch
                    <p key="pillowfort-2-1">To make this design, I meshed together a ton of stock photos to create the ethereal landscape I envisioned. I should say I didn't use AI at all in this project; generative AI hadn't even hit the mainstream yet!</p>,
                    <CaptionedImage key="pillowfort-2-2" src="/proj/pillowfort/composite_preview.png" caption="Examples of some of the source images used and where they were included in the design. I feel the need to say I don't normally throw my jackets around; I used the jacket as a greenscreen for my pants." />,
                    <p key="pillowfort-2-3">One fun part of this project was that I used Adobe Photoshop's 3D features to render the text in 3D. Fun fact: the 3D features I used are actually no longer available in Photoshop!</p>,
                    <CaptionedImage key="pillowfort-2-4" src="/proj/pillowfort/text.gif" caption="Progress of the titular text, including 3D extrusion and rendering, replacing the front face, and lighting effects." />,
                    <p key="pillowfort-2-5">I exported each "layer" of the image separately and imported them into Adobe After Effects, where I laid them out in a 3D scene. I then used After Effects to simulate camera movements and some slight animation (i.e., the moon and butterflies bobbing up and down).</p>,
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
            />
        </div>
    )
}
