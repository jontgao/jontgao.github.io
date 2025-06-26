import {useState, useEffect} from "react"

import {SolidButton, HollowButton} from "./button"
import CardGrid from "./cardgrid"
import {Proj, ProjCategories} from "../proj/projData"

/**
 * A row of filters above a CardGrid. Items in CardGrid are filtered based on the filters
 * Single-select filter!
 */
interface FilteredGridProps {
    filters: FilterProps[];
    items: Proj[];
    className?: string;
}
export default function FilteredGrid({filters, items, className}: FilteredGridProps) {
    const [selectedFilter, setSelectedFilter] = useState(ProjCategories.One)
    const [filteredItems, setFilteredItems] = useState(items)

    const handleFilterButtonClick = (selectedFilter: ProjCategories) =>  {
        setSelectedFilter(selectedFilter)
    }

    useEffect(() => {
        setFilteredItems(items.filter((x) => x.categories.includes(selectedFilter)))
    }, [selectedFilter])

    return (
        <div className={`${className || ''}`}>
            <FilterRow filterProps={filters} handleFilterButtonClick={handleFilterButtonClick} selectedFilter={selectedFilter} />
            <CardGrid projs={filteredItems} />
        </div>
    )
}

/**
 * A row of filter buttons
 */
interface FilterRowProps {
    filterProps: FilterProps[];
    handleFilterButtonClick: (selectedFilter: ProjCategories) => void;
    selectedFilter: ProjCategories;
    className?: string;
}
function FilterRow({filterProps, handleFilterButtonClick, selectedFilter, className}: FilterRowProps) {
    return (
        <div className={`button-row-style gap-x-[2rem] mb-[2rem] ${className || ''}`}>
            {filterProps.map((filterProp) =>
                <Filter key={filterProp.id} {...filterProp} onClick={() => handleFilterButtonClick(filterProp.category)} isChecked={filterProp.category === selectedFilter}/>
            )}
        </div>
    )
}

/**
 * An individual filter buttons
 */
interface FilterProps {
    id: number;
    text: string;
    category: ProjCategories;
    onClick: () => void;
    isChecked: boolean;
    className?: string;
}
function Filter(filterProp: FilterProps) {
    let button = filterProp.isChecked
        ? (<SolidButton text={filterProp.text} onClick={filterProp.onClick} iconName="checked" className={filterProp.className}/>)
        : (<HollowButton text={filterProp.text} onClick={filterProp.onClick} className={filterProp.className} />)
    return (
        <>{button}</>
    )
}