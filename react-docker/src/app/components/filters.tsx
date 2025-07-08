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
    const [selectedFilter, setSelectedFilter] = useState(filters.at(0))
    const [filteredItems, setFilteredItems] = useState(items)

    const handleFilterButtonClick = (selectedFilter: FilterProps) =>  {
        setSelectedFilter(selectedFilter)
    }

    useEffect(() => {
        const filteredCategories = new Set(selectedFilter.category)
        setFilteredItems(items.filter((x) => x.categories.some(c => filteredCategories.has(c))))
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
    handleFilterButtonClick: (selectedFilter: FilterProps) => void;
    selectedFilter: FilterProps;
    className?: string;
}
function FilterRow({filterProps, handleFilterButtonClick, selectedFilter, className}: FilterRowProps) {
    return (
        <div className={`button-row-style gap-x-[2rem] mb-[2rem] ${className || ''}`}>
            {filterProps.map((filterProp) =>
                <Filter key={filterProp.id} {...filterProp} onClick={() => handleFilterButtonClick(filterProp)} isChecked={filterProp === selectedFilter}/>
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
    category: ProjCategories[];
    onClick: () => void;
    isChecked: boolean;
    className?: string;
}
function Filter(filterProp: FilterProps) {
    let button = filterProp.isChecked
        ? (<SolidButton text={filterProp.text} iconName="checked" className={filterProp.className}/>)
        : (<HollowButton text={filterProp.text} className={filterProp.className} />)
    return (
        <button onClick={filterProp.onClick}>
            {button}
        </button>
    )
}