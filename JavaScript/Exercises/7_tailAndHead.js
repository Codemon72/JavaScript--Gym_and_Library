// Coding in function tailAndHead. function accept 1 parameter arr(a number array).

// We use an example to explain this task:

// You got an array [123,456,789,12,34,56,78].

// First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:

// [123, 456, 789,12, 34, 56, 78]
//    3+4 6+7 9+1 2+3 4+5 6+7  
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]
// And then, Calculate their product and return it(7x13x10x5x9x13=532350)

// So, tailAndHead([123,456,789,12,34,56,78]) should return 532350

// All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() to solve this kata.

// Check: 
// - last digit of number: modulo operator dividing by 10
// - first digit of number: 

const tailAndHead = (arr) => {
  const firstDigit = num => {return parseInt(('' + num)[0])};
  const lastDigit = num => {return num % 10};
  const temp = []

  for (let i = 0; i < arr.length-1; i++){
    temp.push(lastDigit(arr[i]) + firstDigit(arr[i + 1]))
  }
  return temp.reduce((a, b) => a * b);
}



console.log(tailAndHead([1,2,3,4,5])) // should return 945
console.log(tailAndHead([111,2345,66,78,900])) // should return 7293
console.log(tailAndHead([35456,782,569,2454,875])) // should return 12012