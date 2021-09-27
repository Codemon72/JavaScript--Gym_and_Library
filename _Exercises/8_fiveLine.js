// CODEWARS
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

let s1 = " a";
let s2 = "\txy \n";
let s3 = "           Ok               ";

const fiveLine = (s) => {
  const singleString = s.trim();
  let addedString = singleString;
  const res = [singleString];

  for (let i = 1; i < 5; i++){
    res.push(addedString += singleString);
  }
  return res.join("\n");
}

console.log(fiveLine(s1))