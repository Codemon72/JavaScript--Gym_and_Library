The indexOf() method searches the array for the specified item, and returns its position.

The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.

Returns -1 if the item is not found.

If the item is present more than once, the indexOf method returns the position of the first occurence.

**Note**: The first item has position 0, the second item has position 1, and so on.

**Tip**: If you want to search from end to start, use the lastIndexOf() method

### Syntax
`array.indexOf(item, start)`

### Parameter	Description
- item	- Required. The item to search for
- start	- Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Technical Details

**Return Value**:	A Number, representing the (zero-based) position of the specified item, otherwise -1

source: https://www.w3schools.com/jsref/jsref_indexof_array.asp