



#### async await
async and await make promises easier to write
- async makes a function return a Promise
- await makes a function wait for a Promise

Examples:

Most basic call:
```js
const API_URL = 'http://.....'

// Get initial movies
getMovies(API_URL)


async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}