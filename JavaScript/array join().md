return new string of merged array elements

The join() method returns the array as a string.

The elements will be separated by a specified separator. The default separator is comma (,).

**Note**: this method will not change the original array.

**Note**: join() is the reverse operation of the split() method. 

#### Syntax

`array.join(separator)` 

Parameters

- separator - Optional. The separator to be used. If omitted, the elements are separated with a comma.

**Return Value**:	A String, representing the array values, separated by the specified separator.

**Example**

```
const str = "My name is John";
const words = str.split(" ");
console.log("use split(): ", words);

const s = words.join(" ");
console.log("use join(): ", s);
console.log("use split() and join(): ", str.split(" ").join(" "))

// output:
// use split():[ 'My', 'name', 'is', 'John' ]
// use join(): My name is John
// use split() and join(): My name is John
```
