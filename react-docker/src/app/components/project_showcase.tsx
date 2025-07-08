"use client";

import { projFilters, projData } from "../proj/projData"
import FilteredGrid from "./filters"

export default function ProjectShowcase() {
  return (
    <div id="projects" className="linked-section">
        <h1>Selected Work</h1>
        <FilteredGrid filters={projFilters} items={projData} />
        <h2 className="text-center font-normal mt-[4rem]">
          More projects coming soon!
        </h2>
    </div>
  )
}

