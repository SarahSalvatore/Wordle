import wordBank from "./word-bank.txt";

// fetches word bank and transforms to a Set
export const generateWordSet = async () => {
  let wordSet;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      // tranforms string to array, separated by line (\n)
      const wordArray = result.split("\r\n");
      wordSet = new Set(wordArray);
    });

  return { wordSet };
};
