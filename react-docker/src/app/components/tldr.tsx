export interface TLDRColProps {title: string, list: string[]}
export interface TLDRProps {
    cols: {title: string, items: string[]}[]
}
export default function TLDR({ cols }: TLDRProps) {
    return (
        // TODO: fix this not adjusting to cols length on lg:
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols.length} gap-x-[2rem] gap-y-[1rem]`}>
            {cols.map(col => 
                <div className="flex flex-col w-full" key={col.title}>
                    <div className="text-style-card-title">{col.title}</div>
                    <div className="text-style-card-subtitle">{col.items.join(', ')}</div>
                </div>
            )}
        </div>
    )
}