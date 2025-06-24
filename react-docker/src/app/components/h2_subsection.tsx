export interface H2SubsectionProps {
    subsectionTitle: string,
    subsectionContent?: React.ReactElement[],
    paragraph?: string, // if provided, ignores subsectionContent with paragraph
}
export default function H2Subsection({ subsectionTitle, subsectionContent, paragraph }: H2SubsectionProps ) {
    let content = paragraph || subsectionContent
    return (
        <div>
            <h2> { subsectionTitle } </h2>
            <div className="
                flex flex-col gap-[1rem]
                [&_img]:my-[2rem]
            ">
                { content }
            </div>
        </div>
    )
}