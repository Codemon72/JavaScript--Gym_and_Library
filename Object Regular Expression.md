A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.

In JS regular expressions are objects.

- Modifiers:
- i  - is a modifier (modifies the search to be case-insensitive).
- g  - perform a global match (find all matches rather than stopping after the first match)
- m	 - perform multiline matching

**Syntax**

`/pattern/modifiers;`

- Using String Methods
In JavaScript, regular expressions are often used with the two string methods: `search()` and `replace()`.

The `search()` method uses an expression to search for a match, and returns the position of the match.

The `replace()` method returns a modified string where the pattern is replaced.

sources: 
- https://www.w3schools.com/js/js_regexp.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

Examples: 
- more complex example in /Exercises/6_vowelCode.js