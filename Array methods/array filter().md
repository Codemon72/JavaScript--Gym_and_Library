returns new array with every element that passes a test

The filter() method creates an array filled with all array elements that pass a test (provided as a function).

**Note**: filter() does not execute the function for array elements without values.

**Note**: filter() does not change the original array.

**Note**: filter() will be very slow when dealing with large data. If you need to optimize the performance of the code, better consider other methods.

Examples:
```
const ages = [32, 33, 16, 40];

const checkAdult = (age) => {
  return age >= 18;
}

console.log(ages.filter(checkAdult));

// output: [32, 33, 40];
```

sources: https://www.w3schools.com/jsref/jsref_filter.asp