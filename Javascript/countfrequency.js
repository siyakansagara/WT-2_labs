// create function to count the frequency of word in a sen using Map.

function countword(sentence){
      const frequency= new Map();
      const words = sentence.toLowerCase().split(/\s+/);
    
      words.forEach(word => {
        frequency.set(word, (frequency.get(word) || 0) + 1);
      });
      return frequency;
}
const result = countword("Hello world hello javascript");
console.log(result);

result.forEach((count,word) => {
    console.log(`${word}:${count}`);
});