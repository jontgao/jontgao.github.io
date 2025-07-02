export interface CaptionedImageProps {
    src: string
    caption: string
}
export function CaptionedImage({src, caption}: CaptionedImageProps) {
    return (
        <div className="flex flex-col gap-[1rem] my-[1rem]">
            <img src={src} alt={caption} />
            <div className="text-style-card-subtitle">{caption}</div>
        </div>
    )
}