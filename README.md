# Struts [WIP]
Struts is a simple library for data structures in JavaScript (NodeJS).
It has been created as part of my studies about this subject and as a way to fill my needs of coding.

### How to use it
For now you should manually download <b>Struts</b> from this repository and save it on your dependency folder.

In your code, you can just require it:

```javascript
const struts = require('./path/struts.js');
```

## Data Structures
Here you will find the documentation for this library.

### List
A simple implementation of a list.

#### Methods

<b><i>struts.list.initEmpty(size)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| size      | Integer | Defines the length of an empty list  | boolean  |

<b><i>struts.list.size()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Return the current size from the list  | Integer  |

<b><i>struts.list.moveBeginning()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Set the "pointer" position to the beginning of the list  | Integer [a pointer's value] |

<b><i>struts.list.moveEnd()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Set the "pointer" position to the end of the list  | Integer [a pointer's value] |
