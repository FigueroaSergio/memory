// active cards
// verify if the card match
// doesn't allow open more than 2 cards
// to-do:
//  when clicked fast some cards don't return to be unactive
let clicOnCard=(id, cards, setCards ,currentMove, setCurrentMove)=>{
    
    let newCards= cards
    let moves=currentMove
    
    //only allows open card if there'is only 1 card open currently
    let i = newCards.findIndex(e=> e.id===id);
    // block error of clic two times in the same card
    // and let current moves equal
    if(!moves.includes(i) && !newCards[i].match)
        moves.push(i)
        console.log(moves); 
    if(moves.length<=2){
        newCards[i].active=true
        setCurrentMove(moves)
        setCards(newCards)

    }
    
    if(moves.length===2){
        //extract the cards 
        if(newCards[moves[1]].src===newCards[moves[0]].src){
            newCards[moves[1]].match=true
            newCards[moves[0]].match=true
          
            setCurrentMove([])
           
        }
        else{
            
            setTimeout(()=>{
                
                newCards[moves[1]].active=false
                newCards[moves[0]].active=false
                   
                setCurrentMove([])
                setCards(newCards)
             
                 
            },1000)
            
        }
        
    }
    if(newCards.every(ele=>ele.match===true)){
        setTimeout(()=>alert("you win"),1000)
    }

}
export{ clicOnCard}