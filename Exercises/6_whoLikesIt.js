// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// Note: For 4 or more names, the number in "and 2 others" simply increases.

const likes = (names) => {
  let displayText = '';

  switch (names.length) {
    case 0:
      displayText = 'no one likes this';
      break;
    case 1:
      displayText = `${names[0]} likes this`;
      break;
    case 2:
      displayText = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      displayText = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      displayText = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
  }
  return displayText;
};

console.log(likes([])); //                                -->  "no one likes this"
console.log(likes(['Peter'])); //                         -->  "Peter likes this"
console.log(likes(['Jacob', 'Alex'])); //                 -->  "Jacob and Alex like this"
console.log(likes(['Max', 'John', 'Mark'])); //           -->  "Max, John and Mark like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //  -->  "Alex, Jacob and 2 others like this"
