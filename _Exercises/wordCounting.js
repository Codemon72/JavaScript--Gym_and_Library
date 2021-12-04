// imPROve: 
// - extract all punctuation marks
// - extract numbers

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure alias mollitia placeat quod fuga ullam tot'am consequuntur assumenda? Non beatae officia molestiae eligendi quos magnam, nostrum nisi? Ducimus, ad blanditiis. Eaque sunt, sequi neque officiis at necessitatibus sapiente aperiam alias cum commodi pariatur voluptatibus explicabo laudantium magni. Earum, enim istn't it?"

const wordCount = ( text ) => {
  const wordArray = text.match(/\S+/g);
  // same as:
  // const wordArray = text.split(' ');

  return {
      charactersNoSpaces : text.replace(/\s+/g, '').length,
      characters         : text.length,
      words              : wordArray ? wordArray.length : 0,
      lines              : text.split(/\r*\n/).length
  };
}

console.log(wordCount(text).lines)