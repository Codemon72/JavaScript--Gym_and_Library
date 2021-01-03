splits a string into an array of substrings

**Note**: split() is the reverse operation of the (array) join() method. 

split() can divide a string into several parts by a specified separator. The result is an array of strings. The split string does not include the separator itself. One of its classic uses is to divide a sentence into an array of words:

```
const str = "My name is John";
const words = str.split(" ");
console.log(words);
//output: [ 'My', 'name', 'is', 'John' ]
```
