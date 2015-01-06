backbee/js-hashmap
==========

A javascript hashmap implementation

##Installation:
bower install bb-js-hashmap --save

##Properties:
```js
HashMap.keys
```
Reflects the HashMap keys.

```js
HashMap.values
```
Reflects the HashMap values.

```js
HashMap.length
```
Reflects the number of elements in an HashMap.

##Methods
###Mutator HashMap methods

```js
HashMap.prototype.set()
```
Adds one element to the end of an array and returns the new length of the array.

```js
HashMap.prototype.get()
```
Return the element corresponding at the key parameter.

```js
HashMap.prototype.remove()
```
Remove the element corresponding at the key parameter.

###Mutator Array methods

```js
HashMap.prototype.pop()
```
Removes the last element from an HashMap and returns that element.

```js
HashMap.prototype.push()
```
Adds one elements to the end of an HashMap and returns the new length of the HashMap.

```js
HashMap.prototype.reverse()
```
Reverses the order of the elements of an HashMap — the first becomes the last, and the last becomes the first.

```js
HashMap.prototype.shift()
```
Removes the first element from an HashMap and returns that element.

###Accessor methods

```js
HashMap.prototype.concat()
```
Returns a new HashMap comprised of this HashMap joined with other HashMap(s) and/or value(s).

```js
HashMap.prototype.join()
```
Joins all elements of an HashMap into a string.

```js
HashMap.prototype.indexOf()
```
Returns the first (least) index of an element within the HashMap equal to the specified value, or -1 if none is found.

```js
HashMap.prototype.lastIndexOf()
```
Returns the last index of an element within the HashMap equal to the specified value, or -1 if none is found.

###Iteration methods

```js
HashMap.prototype.forEach()
```
Calls a function for each element in the HashMap.

