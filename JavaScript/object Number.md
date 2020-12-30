#### The `Number` Object

the Number objects have five attributes (or called constant):

MAX_VALUE: The maximum number that can be expressed in JS. Usage: `Number.MAX_VALUE`. Its approximate value is 1.7976931348623157e+308

MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage: `Number.MIN_VALUE`. Its approximate value is 5e-324

NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage: `Number.NaN`. It can be simplified and replaced with NaN.

Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared with Number.NaN to detect a value is not a number but can only call `isNaN()` to compare.

NEGATIVE_INFINITY: The value represents the negative infinity. Usage: `Number.NEGATIVE_INFINITY`. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.

POSITIVE_INFINITY: The value represents the positive infinity. Usage: `Number.POSITIVE_INFINITY`. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.

source: Codewars - https://www.codewars.com/kata/5722fd3ab7162a3a4500031f