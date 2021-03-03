remove the last element of an array and return that element

The pop() method removes the last element of an array, and returns that element.

**Note**: This method changes the length of an array.

**Tip**: To remove the first element of an array, use the shift() method.

#### Syntax

`array.pop()`

Parameters: none


**Return Value**:	Any type*, representing the removed array item. *An array item can be a string, a number, an array, a boolean, or any other object types that are allowed in an array.

source: https://www.w3schools.com/jsref/jsref_pop.asp 

Comment from Codewars:
> These four methods (push(), pop(), shift() and unshift()) are the most basic methods of adding and removing elements. We can choose to use them according to their needs.

> Of course, their shortcomings are obvious. First, they can only manipulate the head and tail of the array, not flexible enough. Secondly, their speed is relatively slow. But we usually don't feel it. When you need to deal with big data, you will understand what is slow. For example, in some cases, the direct assignment of the array elements will be faster than the push method.