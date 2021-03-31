Displays tabular data as a table.

This function takes one mandatory argument data, which **must be an array or an object**, and one additional optional parameter columns.

It logs data as a table. 
Each element in the array (or enumerable property if data is an object) will be a row in the table.

The first column in the table will be labeled (index). If data is an array, then its values will be the array indices. If data is an object, then its values will be the property names. Note that (in Firefox) console.table is limited to displaying 1000 rows (first row is the labeled index).

```js
const mapPins = [
  {ID: "6", name: "Precious Plastic Vienna", lat: 48.179909, lng: 16.41756},
  {ID: "7", name: "Jerry's Place", lat: 53.330422, lng: 6.515993}
]
console.table(mapPins)
// logs indexed table (see below image)
```

![example for console.table()](/images/example_for_console.table().png)

source: https://developer.mozilla.org/en-US/docs/Web/API/Console/table