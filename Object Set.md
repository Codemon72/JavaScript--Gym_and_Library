A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

A Set can hold any value of any data type.

The `Set` object is a built-in data structure introduced in ECMAScript 2015 (ES6) that allows you to store unique values of any type, whether they are primitive values or object references.

It is a distinct data structure separate from regular JavaScript objects or arrays.

Here are some key points about the `Set` object:

1. Uniqueness: A `Set` object stores only unique values. This means that duplicate values are automatically removed, and you can be certain that each value appears only once in the Set.

2. Value Equality: The uniqueness of values in a Set is determined using the concept of value equality. Two values are considered equal (and treated as the same value) if they are of the same type and their content is the same. For primitive values, this means that their values are identical. For objects, value equality is based on their reference, meaning that two object references must point to the same object to be considered equal.

3. Iteration: Sets are iterable, meaning you can use loops or iteration methods to traverse the values in a Set in the order of insertion. The values are iterated in the same order as they were added.

4. No Indexing: Unlike arrays, Sets do not have indices or a specific order. You cannot access elements in a Set using an index. Instead, you can check if a specific value exists in a Set using the `has()` method.

5. Usage: Sets are useful when you want to store a collection of unique values or perform operations that require uniqueness, such as removing duplicates from an array or checking for unique elements.

basic usage of a `Set`:

```js
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate value, will be ignored

console.log(mySet.size); // Output: 3

console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

mySet.delete(1); // Remove a value from the Set

console.log([...mySet]); // Output: [2, 3]
```

In the above example, we create a Set `mySet` and add values to it using the `add()` method. Duplicate values are automatically ignored. We can check the size of the Set using the `size` property, check if a specific value exists using the `has()` method, and delete a value using the `delete()` method. Finally, we convert the Set to an array using the spread operator (`[...mySet]`) to display its values.

Sets provide a powerful and efficient way to work with unique values in JavaScript and can be a handy tool in various scenarios.

Sure! Here's the properly formatted content for a markdown file:

## Set Methods

| Method         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `new Set()`    | Creates a new Set                                     |
| `add()`        | Adds a new element to the Set                         |
| `delete()`     | Removes an element from a Set                         |
| `has()`        | Returns true if a value exists                        |
| `clear()`      | Removes all elements from a Set                       |
| `forEach()`    | Invokes a callback for each element                   |
| `values()`     | Returns an Iterator with all the values in a Set      |
| `keys()`       | Same as values()                                      |
| `entries()`    | Returns an Iterator with the [value,value] pairs      |

## Property

| Property    | Description                                            |
| ----------- | ------------------------------------------------------ |
| `size`      | Returns the number of elements in a Set                |


## How to Create a Set

you can use the new Set() syntax. The Set constructor creates an empty Set object, which you can then populate with values. 
```js
const set = new Set();
```

It's possible to initialize a `Set` with objects, strings, or any other iterable data type. The `Set` constructor can accept any iterable object as an argument.

1. Initializing with an array
  ```js
  const set = new Set([1, 2, 3]);
  ```

2. Initializing with an object:
   ```js
   const obj = { a: 1, b: 2, c: 3 };
   const set = new Set(Object.values(obj));
   ```
   In this example, we create an object `obj` with properties `a`, `b`, and `c`. We then use `Object.values(obj)` to extract the values of the object as an array `[1, 2, 3]`. We pass this array as an argument to the `Set` constructor, and it initializes the `set` with the unique values from the array.

3. Initializing with a string:
   ```js
   const str = 'hello';
   const set = new Set(str);
   ```
   In this example, we create a string `str` with the value `'hello'`. We pass the string directly to the `Set` constructor, and it treats the string as an iterable, extracting each character as a separate value. The `set` will contain unique characters from the string: `'h', 'e', 'l', 'o'`.

Remember that when initializing a `Set` with an iterable, it will extract the unique values and store them in the `Set`, discarding any duplicates.

sources:
https://www.w3schools.com/js/js_object_sets.asp
and AIfred
