const longestWord = (str) =>
  str
    .split(/\s+/)
    .reduce((longest, word) =>
      word.length > longest.length ? word : longest
    , "");
console.log(longestWord("Hello world welcome to javascript"));

