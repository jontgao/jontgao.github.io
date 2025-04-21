"use client";

// import { FilterRow } from "./button";
import CardGrid from "./cardgrid";
import { filters, albums } from "./ex_data";
import { useState } from 'react';
import FilteredGrid from "./filters"

export default function ProjectShowcase() {
  // const filteredAlbums = albums
  // const [filtered, setFiltered] = useState(filteredAlbums);
  // const handleFilter = (event) => {
  //   const value = event.target.value;
  //   const f = albums.filter(filterProp => filterProp.tags && filterProp.tags.includes(value));
  //   setFiltered(f);
  // };
  return (
    <>
        <h1>Selected Work</h1>
        <FilteredGrid filters={filters} items={albums} />
    </>
  )
}

