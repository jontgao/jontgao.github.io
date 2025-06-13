"use client";

import { filters, albums } from "./ex_data";
import FilteredGrid from "./filters"

export default function ProjectShowcase() {
  return (
    <>
        <h1>Selected Work</h1>
        <FilteredGrid filters={filters} items={albums} />
    </>
  )
}

