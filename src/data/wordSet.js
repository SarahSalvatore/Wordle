import wordBank from "./word-bank.txt";

// fetches word bank and transforms to a Set
export const generateWordSet = async () => {
  let wordSet;
  let wordArray;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      // tranforms string to array, separated by line (\n)
      wordArray = result.split("\r\n");
      wordSet = new Set(wordArray);
    });

  return { wordSet, wordArray };
};

// let todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
