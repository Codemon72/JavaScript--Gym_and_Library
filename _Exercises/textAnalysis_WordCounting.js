// keywords: word counting, dictionary, associative array,

// dict.rainbow = 12;
// dict.blubber = 5;
// dict["can't"] = 14;
// dict['917'] = 1;

// let word = 'heart';

// not working:
// dict.word = 21;

// instead:
// dict[word] = 21;

const dict = {};

const text = "Zu Dionys, dem Tyrannen, schlich Damon, den Dolch im Gewande: Ihn schlugen die Häscher in Bande, »Was wolltest du mit dem Dolche? sprich!« Entgegnet ihm finster der Wüterich. »Die Stadt vom Tyrannen befreien!« »Das sollst du am Kreuze bereuen.« blib der Wüterich die Stadt vom blib blib"

const arrayOfWords = text.split(" ");

for(let i = 0; i < arrayOfWords.length; i++) {
  word = arrayOfWords[i] 
  if (!Object.keys(dict).includes(word)){
    dict[word] = 1;
  }
  else if (Object.keys(dict).includes(word)){
    dict[word]++ ;
  }
}

console.table(dict);
