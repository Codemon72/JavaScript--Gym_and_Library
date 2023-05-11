The flat() method concatenates sub-array elements.

### Syntax
`array.flat(depth)`

### Parameters Description
- depth	optional - How deep a nested array should be flattened.
Default is 1.

**Return Value**: The flattened array.

### Examples:
```js
const myArr1 = [[1,2],[3,4],[5,6]];
const newArr1 = myArr1.flat();
// output: 1,2,3,4,5,6

const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr2 = myArr2.flat(2);
// output: 1,2,3,4,5,6,7,8
```

