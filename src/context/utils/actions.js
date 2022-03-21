// active cards
// verify if the card match
// doesn't allow open more than 2 cards
// to-do:
//  when clicked fast some cards don't return to be unactive
let handleCardClick=(index, cards,openCards, setOpenCards)=>{
    let moves = [...openCards]
    //console.log(openCards);
    
    // block error of clic two times in the same card
    // Current moves equal
    // block select cards already opened
    if(!moves.includes(index) && !cards[index].match)
        moves.push(index)
    //console.log(`bf->moves:${moves} opens: ${openCards}`);
    
    if(openCards.length<2){  
        cards[index].active=true
        setOpenCards(moves)
    }
    //console.log(`af->moves:${moves} opens: ${openCards}`);
}
const evaluate=(openCards ,setOpenCards ,cards , setWin)=>{
    let moves=Object.assign([],openCards)
    let [c1,c2] = moves
        if(cards[c1].src===cards[c2].src){
            cards[c1].match=true
            cards[c2].match=true
            setOpenCards([])
            if(cards.every(ele=>ele.match===true)){
                console.log("hey");
                setWin(true)
            }
        }
        else{
            setTimeout(()=>{
                cards[c1].active=false
                cards[c2].active=false
                setOpenCards([])
            },1000)
        }

}

export{ handleCardClick, evaluate}