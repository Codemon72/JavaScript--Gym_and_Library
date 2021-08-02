// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// first solution:
// const alphabetWar = (fight) => {
//   let leftCounter = 0;
//   let rightCounter = 0;
//   let numbers = fight.split("");
//   numbers.forEach((number) => {
//     switch (number) {
//       case "w":
//         leftCounter += 4;
//         break;
//       case "p":
//         leftCounter += 3;
//         break;
//       case "b":
//         leftCounter += 2;
//         break;
//       case "s":
//         leftCounter += 1;
//         break;
//       case "m":
//         rightCounter += 4;
//         break;
//       case "q":
//         rightCounter += 3;
//         break;
//       case "d":
//         rightCounter += 2;
//         break;
//       case "z":
//         rightCounter += 1;
//         break;
//       default:
//         break;
//     }
//   });
//   if (leftCounter > rightCounter) {
//     return "Left side wins!";
//   } else if (leftCounter < rightCounter) {
//     return "Right side wins!";
//   } else if (leftCounter === rightCounter) {
//     return "Let's fight again!";
//   }
// };

// starred solution:
function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

console.log(alphabetWar("z")); //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs")); //=> Right side wins!
console.log(alphabetWar("wwwwwwz")); //=> Left side wins!
