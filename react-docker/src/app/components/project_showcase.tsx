import { FilterRow } from "./button";
import CardGrid from "./cardgrid";
import { filters, albums } from "./ex_data";


export default function ProjectShowcase() {
  return (
    <>
        <h1>Selected Work</h1>
        
        <FilterRow filterProps={filters} />
        <CardGrid projs={albums} />
    </>
  )
}

