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

<b><i>struts.list.forward()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Increments the current postion by one step  | - |

<b><i>struts.list.backward()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Decrements the current position by one step  | - |

<b><i>struts.list.append()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| element      | - | Insert an element at the end of the list  | boolean |

<b><i>struts.list.insertBeginning()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| element     | - |Insert an element at the beginning of the list  | boolean |

<b><i>struts.list.pullOut()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Returns and removes the last element on the list  | element |


<b><i>struts.list.logList()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Prints the list itens  | - |

<b><i>struts.list.logCurrentElement()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Prints the element where the position points to  | - |

<b><i>struts.list.logCurrentPos()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Prints the current position  | - |


