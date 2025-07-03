"use client";

import { filters } from "./ex_data"
import { projData } from "../proj/projData"
import FilteredGrid from "./filters"

export default function ProjectShowcase() {
  return (
    <div id="projects" className="linked-section">
        <h1>Selected Work</h1>
        <FilteredGrid filters={filters} items={projData} />
    </div>
  )
}

