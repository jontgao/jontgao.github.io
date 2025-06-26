export interface TLDRColProps {title: string, list: string[]}
export interface TLDRProps {
    cols: {title: string, items: string[]}[]
}
export default function TLDR({ cols }: TLDRProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[2rem] gap-y-[1rem]">
            {cols.map(col => 
                <div className="flex flex-col w-full">
                    <div className="text-style-card-title">{col.title}</div>
                    <div className="text-style-card-subtitle">{col.items.join(', ')}</div>
                </div>
            )}
        </div>
    )
}