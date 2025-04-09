import {useState, useEffect} from "react"
import {SolidButton, HollowButton} from "./button"
import CardGrid from "./cardgrid"
import { filters, albums } from "./ex_data";

export default function FilterGrid(filters, items) {
    const [selectedFilter, setSelectedFilter] = useState([])
    const [filteredItems, setFilteredItems] = useState(items)

    const handleFilterButtonClick = (selectedCategory) =>  {
        setSelectedFilter(selectedCategory)
    }

    useEffect(() => {
        setFilteredItems(items.filter((x) => x.category.includes(selectedFilter)))
    }, selectedFilter)

    return (
        <>
            <FilterRow filterProps={filters} handleFilterButtonClick={handleFilterButtonClick} />
            <CardGrid projs={filteredItems} />
        </>
    )
}

interface FilterProps {
    text: string;
    isChecked: boolean;
    className?: string;
}
interface FilterRowProps {
    filterProps: FilterProps[];
    handleFilterButtonClick: any; // fix
    className?: string;
}
function Filter({text, isChecked = false, className}: FilterProps) {
    let button = isChecked
        ? (<SolidButton text={text} iconName="checked" className={className}/>)
        : (<HollowButton text={text} className={className} />)
    return (
        <>{button}</>
    )
}
function FilterRow({filterProps, handleFilterButtonClick, className}: FilterRowProps) {
    return (
        <div className={`button-row-style gap-x-[2rem] mb-[2rem] ${className || ''}`}>
            {
            filterProps.map((filterProp) =>
                <Filter {...filterProp} onClick={() => handleFilterButtonClick(text)} key={filterProp.id}/>
            )
            }
        </div>
    )
}