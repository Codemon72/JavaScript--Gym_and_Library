returns the Unicode of the character at the specified index

The charCodeAt() method returns the Unicode of the character at the specified index in a string.

The index of the first character is 0, the second character 1, and so on.

**Tip**: You can use the charCodeAt() method together with the length property to return the Unicode of the last character in a string. The index of the last character is -1, the second last character is -2, and so on.

**Tip**: For encryption and decryption it pairs up well with `fromCharCode()`.

**Note**: This method returns "NaN" if there is no character at the specified index, or if the index is less than "0".

#### Syntax

`string.charCodeAt(index)`

Parameters
- index	  - Optional. A number representing the index of the character you want to return. If not specified, default value is 0.

**Return Value**:	A Number, representing the unicode of the character at the specified index.

source: https://www.w3schools.com/jsref/jsref_charcodeat.asp
