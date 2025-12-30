import H2Subsection from "../../components/h2_subsection"
import { CaptionedImage } from "../../components/captioned_image";

export default function ContentFoh() {
    return (
        <div className="proj-content-styles">
            <H2Subsection
                key="foh-0"
                subsectionTitle="The Gift of Clean Water"
                subsectionContent={[
                    <p key="foh-0-0">I went on two week-long Filter of Hope mission trips to different cities in a Caribbean country, one in 2022 and one in 2024. During the mission trip, we team up with a local church and translators to go door-to-door to connect personally with families and install life-changing water filters. This country's culture is so beautiful and welcoming, and it was truly an honor to spread even just the smallest drop of hope to such a beautiful people.</p>,
                    <p key="foh-0-1">To attend the trip, I support raised (essentially: asking people to donate you money) over a thousand dollars in funds both years. That in and of itself was a new and frightening experience, but I learned a lot through it and would encourage anyone holding back from going on a trip like this to dive in!</p>,
                    <p key="foh-0-2">We had truly the most gracious hosts, and were lucky enough to eat incredibly delicious food every day, even though food is in limited supply there. Over the course of my two trips, I got to see three different parts of the country, and every part is so incredibly beautiful. It's an experience I treasure. If you would like to get involved or donate, learn more about <a href="https://filterofhope.org/">Filter of Hope</a>.</p>,
                    <p key="foh-0-3">Check out some photos below!</p>,
                ]}
            />
            <H2Subsection
                key="foh-1"
                subsectionTitle="2022"
                subsectionContent={[
                    <CaptionedImage key="foh-1-0" src="/proj/foh/2022/PXL_20220314_161216028.jpg" caption="A family we shared a filter with. The man in the pink shirt has THE MOST adorable kid, and we were able to gift them lots of toys!" />,
                    <CaptionedImage key="foh-1-1" src="/proj/foh/2022/IMG_1202.jpg" caption="Prayer on a rooftop overlooking the city." />,
                    <CaptionedImage key="foh-1-2" src="/proj/foh/2022/IMG_5673.jpeg" caption="A family we installed a filter for. I remember they were really invested in their TV show, so much so that they would pause our conversation for important scenes 😆." />,
                    <CaptionedImage key="foh-1-3" src="/proj/foh/2022/PXL_20220313_115023149.jpg" caption="A view of the city from our residence. It remains one of the most beautiful places I've been to." />,
                ]}
            />
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
            />
        </div>
    )
}
