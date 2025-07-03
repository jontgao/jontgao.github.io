import type { Metadata } from 'next'
import { projData, error404ProjData, Proj } from "../projData"

interface PageParams {
  params: { slug: string };
}

function lookUpProj({ params }: PageParams): Proj {
  return projData.find(p => p.slug === params.slug) || error404ProjData
}

export async function generateStaticParams() {
  return projData.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  params = await params
  const proj = lookUpProj({params})
 
  return {
    title: proj.metaTitle,
    description: proj.metaDesc,
  }
}

export default async function Page({ params }: PageParams) {
    params = await params
    const proj = lookUpProj({params})
    return (
        <div>
            <h1>{proj.metaTitle}</h1>
            <div className="flex flex-col gap-[4rem] paragraph-text">
              {proj.content}
            </div>
        </div>
    )
}