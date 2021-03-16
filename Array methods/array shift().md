remove the first item of an array and return it

The shift() method removes the first item of an array.

**Note**: This method changes the length of the array.

**Note**: The return value of the shift method is the removed item.

**Tip**: To remove the last item of an array, use the pop() method.

**Note**: this method will change the original array.

#### Syntax

`array.shift()`

Parameters: none

**Return Value**:	Any type*, representing the removed array item. *An array item can be a string, a number, an array, a boolean, or any other object types that are allowed in an array.

source: https://www.w3schools.com/jsref/jsref_shift.asp

Comment from Codewars:
> These four methods (push(), pop(), shift() and unshift()) are the most basic methods of adding and removing elements. We can choose to use them according to their needs.

> Of course, their shortcomings are obvious. First, they can only manipulate the head and tail of the array, not flexible enough. Secondly, their speed is relatively slow. But we usually don't feel it. When you need to deal with big data, you will understand what is slow. For example, in some cases, the direct assignment of the array elements will be faster than the push method.