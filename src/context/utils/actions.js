// active cards
// verify if the card match
// doesn't allow open more than 2 cards
// to-do:
// block select cards already open by match
let clicOnCard=(id, cards, setCards ,currentMove, setCurrentMove)=>{

    let newCards= [...cards]
    let moves=[...currentMove]
   console.log(moves);
    //only allows open card if there'is only 1 card open currently
    if(moves.length<2){
        
        let i = newCards.findIndex(e=> e.id===id);
        newCards[i].active=true

        // block error of clic two times in the same card
        // and let current moves equal
        if(i!==moves[0])moves.push(i)
        setCurrentMove(moves)
        setCards(newCards)

    }
    if(moves.length===2){
        //extract the cards 
        let card1=newCards[moves[0]];
        let card2=newCards[moves[1]];
        if(card1.src===card2.src){
            
            setCurrentMove([])
        }
        else{
            setTimeout(()=>{
               
                newCards[moves[0]].active=false
                newCards[moves[1]].active=false
                   
                setCurrentMove([])
                setCards(newCards)
                 
            },2000)
            
        }
    }

}
export{ clicOnCard}