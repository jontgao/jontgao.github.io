export interface TLDRColProps {title: string, list: string[]}
export interface TLDRProps {
    cols: {title: string, items: string[]}[]
}
export default function TLDR({ cols }: TLDRProps) {
    const getGridCols = () => {
        switch (cols.length) {
            case 1:
                return 'lg:grid-cols-1';
            case 2:
                return 'lg:grid-cols-2';
            case 3:
                return 'lg:grid-cols-3';
            case 4:
            default:
                return 'lg:grid-cols-4';
        }
    };
    const lgGridCols = getGridCols();
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${lgGridCols} gap-x-[2rem] gap-y-[1rem]`}>
            {cols.map(col => 
                <div className="flex flex-col w-full" key={col.title}>
                    <div className="text-style-card-title">{col.title}</div>
                    <div className="text-style-card-subtitle">{col.items.join(', ')}</div>
                </div>
            )}
        </div>
    )
}