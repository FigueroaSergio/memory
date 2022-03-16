const emojis=[ "🦁", "⛺", "🌊", "🌈","🌸","🍕","🎨","🏆","🏹","🐙","🐛","🐟","🐶","💎","📅","📚","📽"]
const genereteCards=(n)=>{
    let emojisRad=getRandomSubarray(emojis,n)
    let cards = []
        for(let i =1; i<=2;i++){
            for(let j =1; j<=n;j++){
                let card={
                    id:i*10+j,
                    src:emojisRad[j-1],
                    active:false, 
                    match:false
                }
                cards.push(card)
            }
        }
    
    
    return mixCards(cards)
}
const mixCards=(cards)=>{
    return cards.sort(function() {return Math.random() - 0.5})
}

const getRandomSubarray =(arr, size)=> {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
export {genereteCards}
