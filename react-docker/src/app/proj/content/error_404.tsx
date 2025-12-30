import { CaptionedImage } from "../../components/captioned_image";

export default function ContentError404() {
    return (
        <div className="proj-content-styles">
            <CaptionedImage key="error-404-1" src="/proj/pikachu.gif" caption="Pikachu attacking—and crashing into—a tree." />
            <p key="error-404-2">This page is a blank space.</p>
        </div>
    )
}
