let text = "";

fetch('./assets/example_text.txt')
  .then((response) => response.text())
  .then((data) => {
    // Do something with your data
    text = data;
    console.log(text);
    return text;
  });

// imPROve: have a useful variable text here
console.log(text.length);
