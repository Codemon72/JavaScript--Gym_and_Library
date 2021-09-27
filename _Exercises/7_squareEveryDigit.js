// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


const squareDigits = (num) => {
    // make array from number
    const numAsArray = String(num).split('');
    // square each number in array
    const numAsArraySquared = numAsArray.map(x => x * x);
    // concatenate to integer
    return parseInt(numAsArraySquared.join(''));
}


console.log(squareDigits(9119)) // => 811181