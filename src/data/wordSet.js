import wordBank from "./word-bank.txt";

// fetches word bank and transforms to a Set
export const generateWordSet = async () => {
  let wordSet;
  let wordArray;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      // tranforms string to array, separated by line
      wordArray = result.split(/\r?\n/);
      wordSet = new Set(wordArray);
      console.log(wordSet);
    });

  return { wordSet, wordArray };
};
