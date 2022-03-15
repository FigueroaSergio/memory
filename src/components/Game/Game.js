import { useState } from "react"
import { Table } from "../Table/Table"
import { Timer } from "../Timer/Timer"
function Game({children}) {
    const [time, setTime]= useState(0)
    setTimeout(()=>{setTime(time+1)},1000) 
    
    return(
        <>
            <Timer time={time}/>
            <Table/>
        </>
    )
}
export {Game};