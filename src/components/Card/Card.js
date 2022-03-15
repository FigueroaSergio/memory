import {useContext} from "react"

import { Context } from "../../context/Context"

function Card ({card}){
    let {handleClickCard}= useContext(Context)
    return(
        <>
            <div className="col ">
                <div  className="card" role="button" onClick={()=>handleClickCard(parseInt(card.id))}>
                    {card.active?card.src:"x"}
                </div>
                
            </div>
        </>
    )
}
export { Card }