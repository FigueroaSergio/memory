const emojis = [
  "🦁",
  "⛺",
  "🌊",
  "🌈",
  "🌸",
  "🍕",
  "🎨",
  "🏆",
  "🏹",
  "🐙",
  "🐛",
  "🐟",
  "🐶",
  "💎",
  "📅",
  "📚",
  "📽",
  "😎",
  "👽",
  "🎩",
  "🍉",
  "⚽",
];
const genereteCards = (n) => {
  let emojisRad = getRandomSubarray(emojis, n);
  let cards = emojisRad.concat(emojisRad);
  cards = mixCards(cards);

  let columns = 4;

  let auxColums = -1;
  let auxRows = 0;

  cards = cards.map((card, i) => {
    if (auxColums < columns) {
      auxColums++;
    }
    if (auxColums === columns) {
      auxColums = 0;
      auxRows++;
    }
    return {
      id: i,
      src: card,
      coord: [auxColums, auxRows],
      active: false,
      match: false,
    };
  });
  return cards;
};
const mixCards = (cards) => {
  return cards.sort(function () {
    return Math.random() - 0.5;
  });
};

const getRandomSubarray = (arr, size) => {
  var shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
};
export { genereteCards };
