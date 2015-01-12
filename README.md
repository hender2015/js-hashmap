backbee/js-hashmap
==========

A javascript hashmap implementation

##Installation:
bower install bb-js-hashmap --save



##Properties:

```js
HashMap.length
```
Returns the number of key/value pairs in the HashMap object.

```js
HashMap.size
```
Returns the number of key/value pairs in the HashMap object.


##Methods
###HashMap accessor methods

```js
HashMap.prototype.set(key, value)
```
Sets the value for the key in the HashMap object. Returns the HashMap object.

```js
HashMap.prototype.get(key)
```
Returns the value associated to the key, or undefined if there is none.

```js
HashMap.prototype.has(key)
```
Returns a boolean asserting whether a value has been associated to the key in the HashMap object or not.



###Mutator HashMap methods

```js
HashMap.prototype.delete(key)
```
Removes any value associated to the key and returns the value that HashMap.prototype.has(value) would have previously returned. HashMap.prototype.has(key) will return false afterwards.

```js
HashMap.prototype.clear()
```
Removes all key/value pairs from the HashMap object.


###Mutator Array methods

```js
HashMap.prototype.pop()
```
Removes the last element from an HashMap and returns that element.

```js
HashMap.prototype.push(value)
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
HashMap.prototype.join(separator)
```
Joins all elements of an HashMap into a string.

```js
HashMap.prototype.indexOf(value)
```
Returns the first (least) index of an element within the HashMap equal to the specified value, or -1 if none is found.

```js
HashMap.prototype.lastIndexOf()
```
Returns the last index of an element within the HashMap equal to the specified value, or -1 if none is found.




###Iteration methods

```js
HashMap.prototype.forEach(callback, instance)
```
Calls callbackFn once for each key-value pair present in the HashMap object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

```js
HashMap.prototype.keys()
```
Returns a new Iterator object that contains the keys for each element in the HashMap object in insertion order.

```js
HashMap.prototype.values()
```
Returns a new Iterator object that contains the values for each element in the HashMap object in insertion order.

```js
HashMap.prototype.keys()
```
Returns returns a new Iterator object that contains an array of [key, value] for each element in the HashMap object in insertion order.

