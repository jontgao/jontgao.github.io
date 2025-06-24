import { projData } from "../projData"

export async function generateStaticParams() {
  const projects = [
    { slug: "test-page" }, // TODO: fix this
  ];

  return projects.map(project => ({
    slug: project.slug
  }));
}

export default async function Page({ params }) {
    const proj = projData.find(p => p.slug === params.slug)
    if (!proj) return (<h1>Error 404</h1>) // TODO: make a full Error 404 page or redirect to home?
    // if (!proj) proj = {heading: "NONE", content: "NONE"}
    return (
        <div>
            {/* <h1>{proj.heading}</h1> */}
            <div className="flex flex-col gap-[4rem]">
              {proj.content}
            </div>
        </div>
    )
}