adds new items to the end of an array, and returns the new length

The push() method adds new items to the end of an array, and returns the new length.

**Note**: The new item(s) will be added at the end of the array.

**Note**: This method changes the length of the array.

**Tip**: To add items at the beginning of an array, use the unshift() method.

#### Syntax

`array.push(item1, item2, ..., itemX)` 

Parameters

- item1, item2, ..., itemX - Required. The item(s) to add to the array

**Return Value**:	A Number, representing the new length of the array

source: https://www.w3schools.com/jsref/jsref_push.asp

Comment from Codewars:
> These four methods (push(), pop(), shift() and unshift()) are the most basic methods of adding and removing elements. We can choose to use them according to their needs.

> Of course, their shortcomings are obvious. First, they can only manipulate the head and tail of the array, not flexible enough. Secondly, their speed is relatively slow. But we usually don't feel it. When you need to deal with big data, you will understand what is slow. For example, in some cases, the direct assignment of the array elements will be faster than the push method.