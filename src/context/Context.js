import { createContext, useEffect, useState } from "react";

import { clicOnCard } from "./utils/actions";
import { genereteCards } from "./utils/cards";
const Context = createContext();
function ContextProvider({ children }) {
    const [cards,setCards]=useState([])
    const [currentMove,setCurrentMove]=useState([])
   
    useEffect(()=>{
        setCards(genereteCards(10))
    },[])
    const handleClickCard=(id)=>{
        
         
            clicOnCard(id,cards,setCards, currentMove,setCurrentMove)
     
            
        
            
        
    }
    return (
        <Context.Provider 
        value={{cards,
                setCards, 
                handleClickCard}}>
            {children}
        </Context.Provider>)
}
export { Context, ContextProvider };