The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

**Note**: The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.

This method returns -1 if the value to search for never occurs.

**Note**: The lastIndexOf() method is case sensitive!

**Tip**: Also look at the indexOf() method or search().

#### Syntax

`string.lastIndexOf(searchvalue, start)`

Parameters
- searchvalue	  - Required. The string to search for
- start	        - Optional. The position where to start the search (searching backwards). If omitted, the default value is the length of the string

**Return Value**:	A Number, representing the position where the specified searchvalue occurs for the last time, or -1 if it never occurs.
