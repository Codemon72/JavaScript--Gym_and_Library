"If you just really know JavaScript well you can switch frameworks very easily and it's not a big deal." Brad Traversy 

### Data Types
Basically there are 2 data types:
- **Primitive Data Types**
  - stored directly in the location the variable accesses
  - stored on the stack
  - string, number, boolean, null (intentional empty value), undefined (variable that has not been assigned a value), Symbols (ES6)
  - Note: `typeof Null` will return: 'Object' but this is basically a bug in JavaScript. Google it.
- **Reference Data Types / Objects**
  - accessed by reference
  - objects that are store on the heap
  - pointer to a location in memory
  - Array, Object Literal, Function, Date, Anything Else...

#### Type Conversion
```js
let val;

// TO STRING
// Number to string
val = String(555)
val = String(4 + 4) // val = "8"
val = (5).toString()
// Bool to string
val = String(true)
val = (true).toString()
// Date to string
val = String(new Date())
val = (new Date()).toString()
// Array to string
val = String([1,2,3,4])
val = [1,2,3,4].toString()

// TO NUMBER
val = Number('5')
val = Number(true)  // -> 1
val = Number(false) // -> 0
val = Number(null)  // -> 0
val = Number('Hello') // -> NaN
val = Number([1,2,3]) // -> NaN

val = parseInt('100.31') // -> 100
val = parseFloat('100.31') // -> 100.31
```

#### Type Coercion
type coercion is done by JavaScript for us. 
Example:
```js
const val1 = String(5)
const val2 = 6
cons sum = val1 + val2;
console.log(sum)        // -> 56
console.log(typeof sum) // -> string
```




https://www.youtube.com/watch?v=Cm3U-NgJb9I&feature=youtu.be