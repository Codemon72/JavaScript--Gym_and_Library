#### Method to compare ending of 2 strings

CodeWars: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
```js
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
```

```js
function solution(str, ending){
  return str.endsWith(ending);
}
```

w3schools: https://www.w3schools.com/jsref/jsref_endswith.asp#:~:text=The%20endsWith()%20method%20determines,()%20method%20is%20case%20sensitive.
