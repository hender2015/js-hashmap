backbee/js-hashmap
==========

A javascript hashmap implementation

##Installation:
bower install bb-js-hashmap --save

##Properties:
```HashMap.keys```
Reflects the HashMap keys.

```HashMap.values```
Reflects the HashMap values.

```HashMap.length```
Reflects the number of elements in an HashMap.

##Methods
###Mutator HashMap methods

```HashMap.prototype.set()```
Adds one element to the end of an array and returns the new length of the array.

```HashMap.prototype.get()```
Return the element corresponding at the key parameter.

```HashMap.prototype.remove()```
Remove the element corresponding at the key parameter.

###Mutator Array methods

```HashMap.prototype.pop()```
Removes the last element from an HashMap and returns that element.

```HashMap.prototype.push()```
Adds one elements to the end of an HashMap and returns the new length of the HashMap.

```HashMap.prototype.reverse()```
Reverses the order of the elements of an HashMap — the first becomes the last, and the last becomes the first.

```HashMap.prototype.shift()```
Removes the first element from an HashMap and returns that element.

###Accessor methods

```HashMap.prototype.concat()```
Returns a new HashMap comprised of this HashMap joined with other HashMap(s) and/or value(s).

```HashMap.prototype.join()```
Joins all elements of an HashMap into a string.

```HashMap.prototype.indexOf()```
Returns the first (least) index of an element within the HashMap equal to the specified value, or -1 if none is found.

```HashMap.prototype.lastIndexOf()```
Returns the last index of an element within the HashMap equal to the specified value, or -1 if none is found.

###Iteration methods

```HashMap.prototype.forEach()```
Calls a function for each element in the HashMap.

