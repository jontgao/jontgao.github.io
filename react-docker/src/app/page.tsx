import Card from './components/card'
import {iconMap, Icon} from './components/icon'

export default function TodoList() {
  return (
    <>
      <h1>Selected Work</h1>
      <Card
        imageUrl={"https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png"}
        title={"1989"}
        icons={"icons"}
      />

      {Object.keys(iconMap).map((i) =>
        <Icon name={i}/>
      )}
    </>
  );
}