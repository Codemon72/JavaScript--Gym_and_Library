converts Unicode values to characters

The fromCharCode() method converts Unicode values into characters.

**Note**: This is a static method of the String object, and the syntax is always `String.fromCharCode()`.

**Tip**: When `fromCharCode()` has only one parameter, it is very much like the reverse operation of `charCodeAt()`. They are a pair of good partners. 

#### Syntax

`String.fromCharCode(n1, n2, ..., nX)`

Parameters
- n1, n2, ..., nX	 - Required. One or more Unicode values to be converted.

**Return Value**:	A String, representing the character(s) representing the specified unicode number(s).

source: https://www.w3schools.com/jsref/jsref_fromcharcode.asp

Encryption example from Codewars: https://www.codewars.com/kata/57284d23e81185ae6200162a

```
function decode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
  return chars.join("");
}
function encode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
  return chars.join("");
}
var s="abcde"
s=encode(s);
console.log("encode:",s)    //encryption s
s=decode(s);
console.log("decode:",s)    //decryption s
// output:
// encode: bcdef
// decode: abcde
```

