

#### async await
async and await make promises easier to write
- `async` makes a function return a Promise
- `await` stops execution of the code until everything on it's right side is resolved

Examples:

Most basic call:
```js
const API_URL = 'http://.....'

// Get initial movies
getMovies(API_URL)
  .then(data => console.log('resolved', data))
  .catch(error => console.log('error:', error))


const getMovies = async (url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
```