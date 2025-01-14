import CardGrid from './components/cardgrid'
import {albums} from './components/taylor'

export default function Projects() {
  return (
    <>
      <h1>Selected Work</h1>
      
      <CardGrid className="w-section-w" projs={albums} />
    </>
  );
}