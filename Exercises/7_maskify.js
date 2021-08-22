// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// first solution:
// const maskify = (string) => {
//     let array = string.split('');
//     let newArray = [];
//     for (let i = 0; i < string.length; i++) {
//         if (i < string.length -4) {
//             newArray.push('#')
//         } else {
//             newArray.push(array[i])
//         }
//     }
//     return newArray.join('');
// }

// solution with RegEx - utilizing the dot metacharacter:
const maskify = (string) => {
    return string.slice(0, -4).replace(/./g, '#') + string.slice(-4);
  }


let string = "4556364607935616";
// string = "64607935616";
// string = "1";
// string = "Skippy";
// string = "Nananananananananananananananana Batman!";
// string = ";";

console.log(maskify(string));