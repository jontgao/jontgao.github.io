import CardGrid from './components/cardgrid'
import Icon from './components/icon'
import {albums} from './components/taylor'

export default function Projects() {
  return (
    <>
      <h1>Selected Work</h1>
      <CardGrid className="w-section-w" projs={albums} />
    </>
  );
}