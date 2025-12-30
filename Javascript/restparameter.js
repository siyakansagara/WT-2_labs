// Create a function using rest parameter to calculate the product of any number of argument.


function calculateProduct(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

console.log(calculateProduct(2, 1));        
console.log(calculateProduct(2, 1, 4));    
console.log(calculateProduct(5, 10, 3));   
