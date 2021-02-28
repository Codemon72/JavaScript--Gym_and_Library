# Specific Terms

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