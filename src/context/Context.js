import { createContext, useEffect, useState } from "react";

import { handleCardClick, evaluate } from "./utils/actions";
import { genereteCards } from "./utils/cards";
const Context = createContext();
function ContextProvider({ children }) {
    const [cards,setCards]=useState([])
    const [openCards,setOpenCards]=useState([])
    
    useEffect(()=>{
        
        if(openCards.length===2)
            evaluate(openCards,setOpenCards,cards)
        if(openCards.length>2){
            console.log(`Open:${openCards}`);
        }
    },[openCards,cards])
    
    useEffect(()=>{
        setCards(genereteCards(10))
    },[])
    
    const handleClickCard=(index)=>handleCardClick(index,cards, openCards,setOpenCards)
    
    return (
        <Context.Provider 
        value={{cards,
                setCards, 
                handleClickCard}}>
            {children}
        </Context.Provider>)
}
export { Context, ContextProvider };