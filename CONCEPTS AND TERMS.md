## Data Types, Conversion and Coercion
### Data Types
Basically there are 2 data types:
- **Primitive Data Types**
  - stored directly in the location the variable accesses
  - stored on the stack
  - string, number, boolean, null (intentional empty value), undefined (variable that has not been assigned a value), Symbols (ES6)
  - Note: `typeof Null` will return: 'Object' but this is basically a bug in JavaScript. Google it.
- **Reference Data Types / Objects**
  - accessed by reference
  - objects that are store on the heap
  - pointer to a location in memory
  - Array, Object Literal, Function, Date, Anything Else...

#### Type Conversion
```js
let val;

// TO STRING
// Number to string
val = String(555)
val = String(4 + 4) // val = "8"
val = (5).toString()
// Bool to string
val = String(true)
val = (true).toString()
// Date to string
val = String(new Date())
val = (new Date()).toString()
// Array to string
val = String([1,2,3,4])
val = [1,2,3,4].toString()

// TO NUMBER
val = Number('5')
val = Number(true)  // -> 1
val = Number(false) // -> 0
val = Number(null)  // -> 0
val = Number('Hello') // -> NaN
val = Number([1,2,3]) // -> NaN

val = parseInt('100.31') // -> 100
val = parseFloat('100.31') // -> 100.31
```

#### Type Coercion
type coercion is done by JavaScript for us. 
Example:
```js
const val1 = String(5)
const val2 = 6
cons sum = val1 + val2;
console.log(sum)        // -> 56
console.log(typeof sum) // -> string
```
___


### HTMLCollection
An HTMLCollection object is an _array-like_ list of HTML elements.

Methods like the `getElementsByTagName()` returns an HTMLCollection.

An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed.

### IIFE - Immediately Invokable Function Expression
Basically a function that you declare and run at the same time.
```js
(function(){
  console.log('IIFE ran...');
})();
// or:
(() => {
      console.log('IIFE is still running ...');
})();
```
IIFE with parameters:
```js
((name) => {
  console.log(`IIFE is running with parameter: ${name}`);
})('Chipper');
```
___


### Scope

Global Scope
Function Scope
Block Scope - e.g inside curly brackets of an if statement. Same named globally with `var` declared variable will be overwritten here

reference: https://developer.mozilla.org/en-US/docs/Glossary/Scope
___


### node vs element vs child node
**node**:  every single thing in HTML is a node. That means if you have:
`<li class=list-item> some text </li>` 
 you have 3 nodes: li, class declaration and the text inside li.
 Even line-breaks in your code are text-nodes.

**element**: only nodes which have an element tag => every single html tag (a, div, ul, ol, section etc.)

**child node**:  is a node that is one or more level below the targeted element or node ('nested in')

The DOM Node interface is an abstract base class upon which many other DOM API objects are based, thus letting those object types to be used similarly and often interchangeably. As an abstract class, there is no such thing as a plain Node object. All objects that implement Node functionality are based on one of its subclasses. Most notable are Document, Element, and DocumentFragment.
source: https://developer.mozilla.org/en-US/docs/Web/API/Node
___ 


### NodeList vs HTMLCollection
TLDR: 
- Nodelist can contain any type of nodes like text, comment, element nodes but HTML collection contains element nodes only.
- both are not arrays, but NodeLists are iterable (works with `forEach()`)

(Array's are iterable objects that have their keys as indexed numbers and have available all the array methods.)

`document.querySelectorAll(".blib")` returns a NodeList
`document.getElementsByClassName("blib")` returns an (array-like) HTMLCollection

At first hand the HTMLCollection updates itself automatically every time it detects a change in the items that were retrieved by the method. On the other hand, NodeList will remain the same since the moment we executed it no matter the changes that occur in our HTML.
source: https://dev.to/jharteaga/difference-between-htmlcollection-and-nodelist-25bp

Example:
"I have a slider that dynamically adds dots based on number of slides. There is also a theme changing toggle and I couldn't for the love of god figure out why toggling classes on everything works, but not on these little dots.
Couple hours later I've finally found a solution - I've been using

`const dots = document.querySelectorAll(".projects__dot")`

which returns a NodeList, which is STATIC (not LIVE).

What it means that my const dots was declared before slider was initialized, so even after adding dots to the DOM it didn't update.

After changing it to

`const dots = document.getElementsByClassName("projects__dot")`,

which is a simple HTMLCollection, which is LIVE (Dynamic), everything works just like it should." 
___


## truthy, falsy, absence of value

### truthy vs falsy
tldr: JavaScript uses type coercion in Boolean contexts.

Whenever JS has to evaluate a statement to be true or false (e.g. in a conditional statement) and can't do it with mathematics or pure logic, it uses **type coercion**.

in a conditional JS will evaluate all these to false:
- `undefined`
- `null`
- empty string `''` `""` ` `` ` 
- `0` also: `-0` and `0n`
- `NaN`
- `false`

everything else will evaluate to true!
For example:
- `{}`
- `[]`
- `-5`

Anything that JS evaluates to `false` in a conditional is called 'falsy'.
All values are truthy unless they are defined as falsy.

### null vs undefined
`null` is the intentional, `undefined` the unintentional absence of value.
=> good practice: if you want to set something to 'no value' set it to `null`. If the JS engine is setting something to 'no value' it will use `undefined`.

### checking for absence of value
```js
null === undefined  // false
null == undefined   // true

// because:
typeof undefined    // undefined
typeof null         // object (legacy reasons)

// checking for absence of value
if (variableX == null) {
  console.log('absence of value')
}
```
___


#### Regular Expression
see under: 'Object Regular Expression.md'
___


#### Method

A method is a function stored as a property (in an object).

#### CommonJS
As for what CommonJS is: CommonJS was an effort to define common standards for the various competing server-side JavaScript environments that existed at the time (including well-known but now mostly obsolete stuff like Rhino as well as a few lesser known alternatives to Node that have died out). Node mostly won, so the new common standard is "whatever Node does".

One of the reasons AMD failed was that it is a lot more complex than the alternative. AMD is intended to be asynchronous at runtime. This means it not only defines dependencies, it also conflates the issue of lazy loading dependency bundles. As it turned out, lazy loading dependency bundles at runtime is a difficult, rare and heterogeneous enough problem that a module system can't easily solve it. But having this kind of complexity in it meant that it was effectively overengineered for the more common simple problems.

That said, if you write code today, just use either Node-style imports directly or a tool like Babel that translates ES6 imports to Node-style ones.

source: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
___

### import vs require
Is there any important difference between import and require ?
And: why do I see all tutorials and examples in Node.js with require and all in React with import?

From reddit: "For a long time, javascript did not have any sort of import mechanism. The way to share code between files was to stick them all in the same file (usually an HTML file in a browser). When people started using JS outside of browsers, and for bigger applications, some people noticed this hole and built CommonJS: a language standard which included require imports, among other things. A few projects have implemented/ spun off this; primarily node, the most popular non-browser javascript environment. A few build tools for browsers also implemented it.

Eventually, ECMAscript (i.e. the core standardised javascript) added their own import standard: import. It's the official correct way for javascript to do imports. However, for some time require remained more common to see than import because a standards organisation defining a standard is not the same as every implementor catching up with the feature.

If import works for you and your targets, use it. It's the "correct" way to do it."
source: https://www.reddit.com/r/webdev/comments/cfbcfy/import_vs_require/
___


### Promises
- "they are ways to ensure you have data before you try to do something with the data, when the request might take a while."