import {useContext} from "react"

import { Context } from "../../context/Context"
import "./Card.css"

function Card ({card}){
    let {handleClickCard}= useContext(Context)
    return(
        <>
            <div className="col ">
                <div  className="card game-card" role="button" onClick={()=>handleClickCard(parseInt(card.id))}>
                    <p>{(card.active)?card.src:"x"}</p>
                </div>
                
            </div>
        </>
    )
}
export { Card }