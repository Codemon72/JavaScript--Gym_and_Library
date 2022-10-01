// keywords: character counting, dictionary, associative array, 

// COUNT ALL CHARACTERS IN A TEXT
// SORT THE MAP BY HIGHEST VALUES
// SORT THE MAP BY KEYS


let dict = {};

const text = "Zu Dionys, dem Tyrannen, schlich Damon, den Dolch im Gewande: Ihn schlugen die Häscher in Bande, »Was wolltest du mit dem Dolche? sprich!« Entgegnet ihm finster der Wüterich. »Die Stadt vom Tyrannen befreien!« »Das sollst du am Kreuze bereuen.«"


const charCounting = () => {
  for (let i = 0; i < text.length; i++) {
    // if text.charAt(i) is not present in dict -> insert it with value 1
    if (!dict[text.charAt(i)]) {
      dict[text.charAt(i)] = 1;
    } 
    // if text.charAt(i) is present in dict -> add +1 to value
    else if (dict[text.charAt(i)]) {
      dict[text.charAt(i)] +=1 ;
    }
  }
  console.table(dict)
}

charCounting()

// SORT THE MAP BY KEYS (alphabetically)

const orderedDictByKeys = Object.keys(dict).sort().reduce(
  (obj, key) => { 
    obj[key] = dict[key]; 
    return obj;
  }, 
  {}
);

console.table(orderedDictByKeys)


// Turn map into sorted arrays
const keysSorted = Object.keys(dict).sort(function(a,b){return dict[a]-dict[b]})
console.table(keysSorted)

// SORT THE MAP BY HIGHEST VALUES



// Interestin Articles
// https://en.wikipedia.org/wiki/Concordance_(publishing)