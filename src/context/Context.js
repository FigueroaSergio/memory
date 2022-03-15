import { createContext, useEffect, useState } from "react";
import { clicOnCard } from "./utils/actions";
const Context = createContext();
function ContextProvider({ children }) {
    const [cards,setCards]=useState([])
    const [currentMove,setCurrentMove]=useState([])
    useEffect(()=>{
        let data = []
        for(let i =1; i<=2;i++){
            for(let j =1; j<=8;j++){
                let card={
                    id:i*10+j,
                    src:j,
                    active:false
                }
                data.push(card)
            }
        }
        setCards(data)
    },[])
    const handleClickCard=(id)=>clicOnCard(id,cards,setCards, currentMove,setCurrentMove)
    return (
        <Context.Provider 
        value={{cards,
                setCards, 
                handleClickCard}}>
            {children}
        </Context.Provider>)
}
export { Context, ContextProvider };