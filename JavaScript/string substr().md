The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

**Tip**: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).

**Note**: The substr() method does not change the original string.

#### Syntax

`string.substr(start, length)`

Parameters:

**start** 	Required. The position where to start the extraction. First character is at index 0.

            If start is positive and greater than, or equal, to the length of the string, substr() returns an empty string.

            If start is negative, substr() uses it as a character index from the end of the string.

            If start is negative or larger than the length of the string, start is set to 0

**length**	Optional. The number of characters to extract. If omitted, it extracts the rest of the string

**Return Value**:	A new String, containing the extracted part of the text. If length is 0 or negative, an empty string is returned