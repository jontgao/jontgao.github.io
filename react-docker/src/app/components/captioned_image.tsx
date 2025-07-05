export interface CaptionedImageProps {
    src: string
    caption: string
}
export function CaptionedImage({src, caption}: CaptionedImageProps) {
    return (
        <Caption content={<img src={src} alt={caption} />} caption={caption} />
    )
}
export interface CaptionedProps {
    children?: React.ReactNode
    content?: React.ReactNode
    caption: string
}
export function Caption({children, content, caption}: CaptionedProps) {
    return (
        <div className="flex flex-col gap-[1rem] my-[1rem]">
            {children || content}
            <div className="text-style-card-subtitle">{caption}</div>
        </div>
    )
}