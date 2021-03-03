### A Node in the DOM
The DOM Node interface is an abstract base class upon which many other DOM API objects are based, thus letting those object types to be used similarly and often interchangeably. As an abstract class, there is no such thing as a plain Node object. All objects that implement Node functionality are based on one of its subclasses. Most notable are Document, Element, and DocumentFragment.
source: https://developer.mozilla.org/en-US/docs/Web/API/Node

### NodeList vs HTMLCollection
TLDR: 
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

#### Regular Expression

A regular expression is an object that describes a pattern of characters.

Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.

**Syntax**

`/pattern/modifiers;`

It's used in the (string) replace() method.

#### Method

A method is a function stored as a property (in an object).

#### CommonJS
As for what CommonJS is: CommonJS was an effort to define common standards for the various competing server-side JavaScript environments that existed at the time (including well-known but now mostly obsolete stuff like Rhino as well as a few lesser known alternatives to Node that have died out). Node mostly won, so the new common standard is "whatever Node does".

One of the reasons AMD failed was that it is a lot more complex than the alternative. AMD is intended to be asynchronous at runtime. This means it not only defines dependencies, it also conflates the issue of lazy loading dependency bundles. As it turned out, lazy loading dependency bundles at runtime is a difficult, rare and heterogeneous enough problem that a module system can't easily solve it. But having this kind of complexity in it meant that it was effectively overengineered for the more common simple problems.

That said, if you write code today, just use either Node-style imports directly or a tool like Babel that translates ES6 imports to Node-style ones.

source: https://www.w3schools.com/jsref/jsref_obj_regexp.asp