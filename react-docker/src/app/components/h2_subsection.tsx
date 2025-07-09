import React from "react"

export interface H2SubsectionProps {
    subsectionTitle: string,
    subsectionContent?: React.ReactElement[],
    paragraph?: string, // if provided, ignores subsectionContent with paragraph
}
export default function H2Subsection({ subsectionTitle, subsectionContent, paragraph }: H2SubsectionProps ) {
    const content = paragraph || subsectionContent
    return (
        <div>
            <h2> { subsectionTitle } </h2>
            <div className="flex flex-col gap-[1rem]">
                {content}
            </div>
        </div>
    )
}