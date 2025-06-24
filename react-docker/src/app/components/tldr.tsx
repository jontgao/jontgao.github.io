export interface TLDRColProps {title: string, list: string[]}
export interface TLDRProps {
    cols: {title: string, items: string[]}[]
}
export default function TLDR({ cols }: TLDRProps) {
    return (
        <div className="w-full flex justify-stretch bg-mustard">
            {/* {cols.map(col => 
                <div className="flex flex-col bg-ketchup">
                    <div className="text-style-card-title">{col.title}</div>
                    <div className="text-style-card-subtitle">{col.items}</div>
                </div>
            )} */}
            <div className="flex flex-col bg-ketchup">
                    <div className="text-style-card-title">TitleA</div>
                    <div className="text-style-card-subtitle">ds</div>
                </div>
                <div className="flex flex-col bg-ketchup">
                    <div className="text-style-card-title">Titleb</div>
                    <div className="text-style-card-subtitle">sfd</div>
                </div>
        </div>
    )
}