calls a function once for each element in an array and returns new array with the results

**Note**: map() does not execute the function for array elements without values.

**Note**: this method does not change the original array.

#### Syntax

`array.map(function(currentValue, index, arr), thisValue)`

**Parameter Values**

- function(currentValue, index, arr) - Required. A function to be run for each element in the array. Function arguments: 
  - currentValue    - Required. The value of the current element.
  - index           - Optional. The array index fo the current element.
  - arr             - Optional. The array object the current element belongs to.

- thisValue     - Optional. A value to be passed to the function to be used as its "this" value.
If this parameter is empty, the value "undefined" will be passed as its "this" value.

**Return Value**:	An Array containing the results of calling the provided function for each element in the original array.

Examples:

```js
// Direct use of the existing function
var a = [1, 4, 9, 16];
var b = a.map(Math.sqrt);
console.log(a);   // output: [ 1, 4, 9, 16 ]
console.log(b);  // output: [ 1, 2, 3, 4 ]

// Using simple custom functions
var a=[1, 2, 3, 4];
var b=a.map(x=>x+1);
console.log(a);   //output: [ 1, 2, 3, 4 ]
console.log(b);  //output: [ 2, 3, 4, 5 ]

// This example will take the index of the array as a value:
// (This time the map method uses two parameters, the first argument represents the element itself, the second parameter represents the index of elements: We only use the second parameter, but the first can not be omitted, so we use the underscore. (The underscore is just to let the reader know this argument is not used).)
var a = [...Array(4)];
var b = a.map((_, i) => i);
var c = [...Array(4)].map((_, i) => i); 
var d = Array.prototype.map.call(a, (_, i) => i); 
console.log(a);   // output: [ undefined, undefined, undefined, undefined ]
console.log(b);   // output: [ 0, 1, 2, 3 ]
console.log(c);   // output: [ 0, 1, 2, 3 ]
console.log(d);   // output: [ 0, 1, 2, 3 ]

// The following example is the simulation of the reverse method, which uses three parameters, the third parameter represents the array itself:
var a=[2, 4, 6, 8];
var b=a.map((_,i,arr)=>arr[arr.length-1-i]);
console.log(a);   //output: [ 2, 4, 6, 8 ]
console.log(b);   //output: [ 8, 6, 4, 2 ]


// from calling the function with this string: accum("RqaEzty") -> this result is expected: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
```

Uppercase every word
```js
function uppercaseEveryWord(string) {
  return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}
console.log(
  uppercaseEveryWord("How can mirrors be real if our eyes aren't real.")
)
// => "How Can Mirrors Be Real If Our Eyes Aren't Real."
```