"use client";

import Icon from "./icon";
import {iconNameType} from "./icon";
import { useState } from 'react';

interface ButtonProps {
    text: string;
    linkUrl?: string;
    iconName?: iconNameType;
    className?: string;
}
export function SolidButton({text, linkUrl, iconName, className}: ButtonProps) {
  return (
    <a
      href={linkUrl}
      className={`
        button-base-style
        flex flex-row	gap-[0.25rem]
        bg-mustard
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </a>
  )
}
function HollowButton({text, linkUrl, iconName, className}: ButtonProps) {
  return (
    <a
      href={linkUrl}
      className={`
        button-base-style
      flex flex-row	gap-[0.25rem]
      border border-pitch
        ${className || ''}
      `}
    >
      {iconName && <Icon name={iconName} />} {text}
    </a>
  )
}

interface ButtonRowProps {
  buttonProps: ButtonProps[];
  className?: string;
}
export function ButtonRow({buttonProps, className}: ButtonRowProps) {
  return (
    <div className={`button-row-style my-[3rem] ${className || ""}`}>
      {
        buttonProps.map((buttonProp, i) => 
          <SolidButton {...buttonProp} key={i}/>
        )
      }
    </div>
  )
}

interface FilterProps {
  id: number,
  text: string;
  isChecked: boolean;
  tags: string[]; // @todo: refactor to enum
  className?: string;
}
interface FilterRowProps {
  filterProps: FilterProps[];
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
export function FilterRow({filterProps, className}: FilterRowProps) {
  const [filtered, setFiltered] = useState(filterProps);
  const handleFilter = (event) => {
    const value = event.target.value;
    const f = filterProps.filter(filterProp => filterProp.tags && filterProp.tags.includes(value));
    setFiltered(f);
  };
  return (
    <>
      <input type="text" onChange={handleFilter} />
      <div className={`button-row-style gap-x-[2rem] mb-[2rem] ${className || ''}`}>
        {
          filtered.map((filterProp) =>
            <Filter {...filterProp} key={filterProp.id}/>
          )
        }
      </div>
    </>
    
  )
}