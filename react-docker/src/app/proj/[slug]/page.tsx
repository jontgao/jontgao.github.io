import { notFound } from 'next/navigation';
import type { Metadata } from 'next'
import React from "react"
import { projData, error404ProjData, Proj, contentBySlug } from "../projData"

interface PageParams {
  params: Promise<{ slug: string }>;
}

function lookUpProj( params : { slug: string }): Proj {
  return projData.find(p => p.slug === params.slug) || error404ProjData
}

export async function generateStaticParams() {
  return projData.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const awaitedParams = await params
  const proj = lookUpProj(awaitedParams)
 
  return {
    title: proj.metaTitle,
    description: proj.metaDesc,
  }
}

export default async function Page({ params }: PageParams) {
    const awaitedParams = await params
    const proj = lookUpProj(awaitedParams)

    const Content = (proj.slug in contentBySlug) ? contentBySlug[proj.slug] : contentBySlug['error-404']
    return (
        <div>
            <h1>{proj.metaTitle}</h1>
            <div className="flex flex-col gap-[4rem] paragraph-text">
              <Content />
            </div>
        </div>
    )
}