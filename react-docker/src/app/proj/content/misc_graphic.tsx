import H2Subsection from "../../components/h2_subsection"
import { CaptionedImage, Caption } from "../../components/captioned_image";
import TwoCol from "../../components/two_col";

export default function ContentMiscGraphic() {
    return (
        <div className="proj-content-styles">
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
                        emphasis="none"
                    />,
                    <CaptionedImage key="misc-graphic-0-2" src="/proj/misc-graphic/turkeyrun.png" caption="Adobe Illustrator. 2023. A promotional social media graphic for a club." />,
                    <CaptionedImage key="misc-graphic-0-3" src="/proj/misc-graphic/springfling.jpg" caption='Adobe Photoshop. 2019. An "Avengers Endgame"-styled logo I made for a school dance.' />,
                    <CaptionedImage key="misc-graphic-0-4" src="/proj/misc-graphic/happy_holidays.gif" caption="Adobe Photoshop. 2019. A promotional social media graphic for a club." />,
                    <CaptionedImage key="misc-graphic-0-5" src="/proj/misc-graphic/graceupongrace.jpg" caption="Adobe Illustrator. 2023. Wall art." />,
                    <CaptionedImage key="misc-graphic-0-6" src="/proj/misc-graphic/roadtrip_shirt.png" caption="Adobe Illustrator. 2019. A shirt design for my dorm. Designed with Luke Knutson." />,
                    <CaptionedImage key="misc-graphic-0-7" src="/proj/misc-graphic/super.jpg" caption="Adobe Photoshop, Adobe Illustrator. 2023. Wall art." />,
                    // <CaptionedImage key="misc-graphic-0-8" src="/proj/misc-graphic/tedx.jpg" caption="Adobe Illustrator, Adobe Photoshop. 2019. A poster design for the Illinois Math and Science Academy's inaugural TEDx conference." />,
                    <CaptionedImage key="misc-graphic-0-9" src="/proj/misc-graphic/skate.png" caption="Adobe Illustrator. 2023. A promotional social media graphic for a club." />,
                    <CaptionedImage key="misc-graphic-0-10" src="/proj/misc-graphic/daytreat.jpg" caption="Adobe Illustrator. 2023. A promotional social media graphic for a club." />,
                ]}
            />
        </div>
    )
}
