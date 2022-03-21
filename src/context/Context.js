import { createContext, useEffect, useState } from "react";

import { handleCardClick, evaluate } from "./utils/actions";
import { genereteCards } from "./utils/cards";
const Context = createContext();
function ContextProvider({ children }) {
    const [cards,setCards]=useState([])
    const [openCards,setOpenCards]=useState([])
    const [win,setWin] = useState(false)
    
    useEffect(()=>{
        if(openCards.length===2)
            evaluate(openCards,setOpenCards,cards,setWin)
        if(openCards.length>2){
            console.log(`Open:${openCards}`);
        }
    },[openCards,cards,win])
    
    useEffect(()=>{
        setCards(genereteCards(2))
    },[])
    
    const handleClickCard=(index)=>handleCardClick(index,cards, openCards,setOpenCards)
    
    return (
        <Context.Provider 
        value={{cards,
                setCards, 
                handleClickCard,win,setWin}}>
            {children}
        </Context.Provider>)
}
export { Context, ContextProvider };