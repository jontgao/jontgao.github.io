"use client"
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react";

import Card from "./card"
import {Proj} from "../proj/projData"

export interface CardGridProps {
    projs: Proj[];
    className?: string;
}

export default function CardGrid({projs, className}: CardGridProps) {
    return (
        // TODO: smooth grid height animation (i.e., so sections below don't "jump" to new grid height)
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                         gap-x-card-grid-gap-x gap-y-card-grid-gap-y
                         ${className || ''}`}
        >
            <AnimatePresence mode="popLayout">
                {
                    projs.map((proj) =>
                        <Card key={proj.slug} {...proj}/>
                    )
                }
            </AnimatePresence>
        </div>
    )
  }