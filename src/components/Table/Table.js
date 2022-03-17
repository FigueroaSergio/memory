import {useContext} from "react"

import {Card} from "../Card/Card"
import { Context } from "../../context/Context"

function Table(){
    let {cards}= useContext(Context)
    return (
        <>
            <div className="row row-cols-4 g-3 ">
                {cards.map((card, index)=>(
                    <Card  key={index} card={card} index={index}/>
                ))}

            </div>
        </>
    )
}
export { Table }