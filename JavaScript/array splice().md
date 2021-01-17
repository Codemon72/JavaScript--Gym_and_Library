add and/or remove elements from an array, return array of removed item(s)

The splice() method adds/removes items to/from an array, and returns the removed item(s).

**Note**: This method changes the original array.

#### Syntax 

`let arrDeletedItems = arr.splice(start, deleteCount, item1, ..., itemX)`

Parameters

- start - Required
    The index at which to start changing the array.
    If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.
    If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.
- deleteCount - Optional
    An integer indicating the number of elements in the array to remove from start.
    If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.
    (Note: In IE8, it won't delete all when deleteCount is omitted.)
    If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
- item1, ..., itemX - Optional
    The elements to add to the array (after the removal), beginning from start. If you do not specify any elements, splice() will only remove elements from the array.

**Return Value**:	A new Array, containing the removed items (if any).

sources: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
- https://www.w3schools.com/jsref/jsref_splice.asp
