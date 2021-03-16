# String Object 

A JavaScript string stores a series of characters like "John Doe".

A string can be any text inside double or single quotes.

### String Properties and Methods
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

#### String Properties

constructor	    Returns the string's constructor function
length	        Returns the length of a string
prototype	      Allows you to add properties and methods to an object


#### String Methods

**All string methods return a new value. They do not change the original variable.**

charAt()	      Returns the character at the specified index (position)
charCodeAt()	  Returns the Unicode of the character at the specified index
concat()	      Joins two or more strings, and returns a new joined strings
endsWith()	    Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	    Checks whether a string contains the specified string/characters
indexOf()	      Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	  Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	        Searches a string for a match against a regular expression, and returns the matches
repeat()	      Returns a new string with a specified number of copies of an existing string
replace()	      Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

search()	      Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	        Extracts a part of a string and returns a new string
split()	        Splits a string into an array of substrings
startsWith()  	Checks whether a string begins with specified characters
substr()	      Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

substring()	    Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	  Converts a string to lowercase letters
toString()	    Returns the value of a String object
toUpperCase() 	Converts a string to uppercase letters
trim()	        Removes whitespace from both ends of a string
valueOf()	      Returns the primitive value of a String object



good reference: https://www.w3schools.com/jsref/jsref_obj_string.asp

