import { createContext, useEffect, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";
import { genereteCards } from "./utils/cards";
const Context = createContext();
function ContextProvider({ children }) {
  const { item: cards, saveItem: saveCards } = useLocalStorage(
    "cards",
    genereteCards(12)
  );
  //const [cards, saveCards] = useState(genereteCards(12));
  let { item: moves, saveItem: saveMoves } = useLocalStorage("moves", []);
  const [openCards, setOpenCards] = useState([]);
  const [win, setWin] = useState(false);
  const [count,setCount]= useState(0)

   
  const viewCards=(val)=>{
    saveCards(cards.map(card=>{return{...card,"active":val}}))
  }
  useEffect(()=>{
    
    if((count===1 ||count===2)&& moves.length<=0){
      saveCards(genereteCards(12))
      viewCards(true)
      setTimeout(()=>viewCards(false),4700)
    }
  },[count])
  
  

  useEffect(() => {
    //console.log("Entre");
    if(moves.length>=12){
      //console.log("Verify if win");
      setWin(cards.every((ele) => ele.match === true));
    }
    setCount(count+1)
    
  }, [moves]);
  useEffect(() => {
    if (openCards.length === 2) evaluate();
  }, [openCards]);

  const handleClickCard = (index) => {
    let newOpenCards = [...openCards];

    // block error of clic two times in the same card
    // Current newOpenCards equal
    // block select cards already opened
    if (
      !cards[index].match &&
      newOpenCards.filter(ele=>ele.index===index).length===0 &&
      openCards.length < 2
    ) {
      cards[index].active = true;
      newOpenCards.push({ index: index, time: new Date() });
      setOpenCards(newOpenCards);
    }
    //console.log(`bf->moves:${moves} opens: ${openCards}`);

    //console.log(`af->moves:${moves} opens: ${openCards}`);
  };
  const evaluate = () => {
    let newOpenCards = [...openCards];
    let [c1, c2] = newOpenCards;

    let card1 = cards[c1.index];
    let card2 = cards[c2.index];
    let move = {
      card1: card1.coord,
      card2: card2.coord,
      start: c1.time,
      end: c2.time,
    };

    if (card1.src === card2.src) {
      card1.match = true;
      card2.match = true;
      move.match = true;
      saveCards(cards);
      setOpenCards([]);
      if (cards.every((ele) => ele.match === true)) {
        //console.log("hey");
        setWin(true);
      }
    } else {
      move.match = false;
      setTimeout(() => {
        card1.active = false;
        card2.active = false;
        setOpenCards([]);
      }, 1000);
    }
    const newMoves = [...moves];
    newMoves.push(move);
    saveMoves(newMoves);
  };
  const restarGame = () => {
    setCount(0)
    saveCards(genereteCards(12));
    setWin(false)
    saveMoves([]);
    setOpenCards([]);
    
  };
  return (
    <Context.Provider
      value={{ cards, restarGame, handleClickCard, win, setWin, moves}}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
