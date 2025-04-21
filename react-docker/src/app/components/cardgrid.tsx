import Card from "./card"
import {CardProps} from "./card"

export interface CardGridProps {
    projs: CardProps[];
    className?: string;
}

export default function CardGrid({projs, className}: CardGridProps) {
    return (
        <div className={`grid grid-cols-3 gap-x-card-grid-gap-x gap-y-card-grid-gap-y ${className || ''}`}>
            {
                projs.map((proj) => 
                    <Card key={proj.id} {...proj}/>
                )
            }
        </div>
    )
  }