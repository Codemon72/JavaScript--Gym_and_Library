The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

This method extracts the characters in a string between "start" and "end", not including "end" itself.

If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).

If either "start" or "end" is less than 0, it is treated as if it were 0.

Note: The substring() method does not change the original string.

#### Syntax

`string.substring(start, end)`

Parameter Values

**start**	  Required. The position where to start the extraction. First character is at index 0
**end**   Optional. The position (up to, but not including) where to end the extraction. If omitted, it extracts the rest of the string

**Return Value**:	A new String containing the extracted characters