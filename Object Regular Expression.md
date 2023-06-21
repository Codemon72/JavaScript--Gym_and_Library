A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.

In JS regular expressions are objects.

**Syntax**

`/pattern/modifiers;`

### Using String Methods
In JavaScript, regular expressions are often used with the these string methods: 

- The `match()` method searches a string for a match against a regular expression, and returns the matches, as an Array object.
- The `replace()` method returns a modified string where the pattern is replaced.
- The `search()` method uses an expression to search for a match, and returns the position of the match.


### Character Classes
`s` - white space
`S` - not white space

###  Pattern Modifiers:
- `i`  - is a modifier (modifies the search to be case-insensitive).
- `g`  - perform a global match (find all matches rather than stopping after the first match)
- `m`  - perform multiline matching

### Brackets
Brackets are used to find a range of characters:

Expression	Description
`[abc]`	Find any character between the brackets
`[^abc]`	Find any character NOT between the brackets
`[^a-m]`	Find any character NOT between the brackets
`[0-9]`	Find any character between the brackets (any digit)
`[^0-9]`	Find any character NOT between the brackets (any non-digit)
`(x|y)`	Find any of the alternatives specified
`/\w/` any alpahnumerical character (a to z, A to Z, 0 to 9) and underscore (_). Same as [a-zA-Z0-9_].
`/\W/` anything that is NOT an alphanumerical character or underscore. Same as [^a-zA-Z0-9_].


### Metacharacters
`.` The . metacharacter is used to find a single character, except newline or other line terminators.
    - `exampleString.replace(/./g, '#')` - replaces all characters in a string with a hashtag
    - `const string = "That's hot!"; const patt1 = /h.t/g;` - will return 'hat' and 'hot'
`\d` - Find a digit
`\D` - Find a non-digit character
`\s` - Find a whitespace character
`\S` - Find a non-whitespace character
`\n` - end of line (in Unix and Unix-like systems - \r means nothing special)
`\r` - carriage return (end of line on old Mac systems (pre-OS X))
        - deep dive of difference between \n and \r: https://stackoverflow.com/questions/1761051/difference-between-n-and-r#answer-1761086
`\t` - tab

### Quantifiers
`*` - 0 or more
`+` - 1 or more

Metacharacters and Quantifiers: https://www.w3schools.com/jsref/jsref_obj_regexp.asp

sources: 
- https://www.w3schools.com/jsref/jsref_obj_regexp.asp
- https://www.w3schools.com/js/js_regexp.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

cheat-sheets:
- https://cheatography.com/davechild/cheat-sheets/regular-expressions/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet


Examples: 
```js
// get an array of connecting characters (including punctuation marks and numbers) - same as text.split(' ')
const wordArray = text.match(/\S+/g);

// extract all white spaces
const allCharactersNoSpaces = text.replace(/\s+/g, '')

// remove all numbers from a string
const stringClean = (s) => {
  return s.replace(/[0-9]/g, '')
}

// count all vowels in a string
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length
}
```
- more complex example in /Exercises/6_vowelCode.js