returns new array with every element that passes a test

The filter() method creates an array filled with all array elements that pass a test (provided as a function).

**Note**: filter() does not execute the function for array elements without values.

**Note**: filter() does not change the original array.

**Note**: filter() will be very slow when dealing with large data. If you need to optimize the performance of the code, better consider other methods.

Examples:
```js
const ages = [32, 33, 16, 40];

const checkAdult = (age) => {
  return age >= 18;
}

console.log(ages.filter(checkAdult));
// output: [32, 33, 40];
```

```js
// return array with only the elements of the type number
function filter_list(list) {
  return list.filter(element => typeof element === 'number');
}
```

```js
// find the first number with an odd occurrence in the array
function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const occurrences = arr.filter(el => el === arr[i])
    if (occurrences.length % 2 != 0) { return arr[i]}
  }
}
console.log(findOdd([1,1,3,3,4]))
// -> 4
```

sources: https://www.w3schools.com/jsref/jsref_filter.asp