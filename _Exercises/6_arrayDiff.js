// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// first working solution:
const arrayDiff = (a, b) => {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    let aNum = a[i];
    let control = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        control = true;
      }
    }
    if (control === false) {
      newArray.push(a[i])
    }
  }
  return newArray
}

console.log(arrayDiff([7, 1, 2, 3, 4, 5, 6], [2, 5]));
