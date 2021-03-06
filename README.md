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
| size      | Integer | Defines the length of an empty list  | Boolean  |

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

<b><i>struts.list.append(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| Element      | - | Insert an element at the end of the list  | Boolean |

<b><i>struts.list.insertBeginning(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| Element     | - |Insert an element at the beginning of the list  | Bolean |

<b><i>struts.list.insert(index, element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| Index, Element     | - |Insert an element at the provided position  | Bolean |

<b><i>struts.list.pullOut()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Returns and removes the last element on the list  | Element |

<b><i>struts.list.removeElement(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| Element      | - | Returns the removed element  | Element |

<b><i>struts.list.returnList()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Returns this list | Array |

<b><i>struts.list.returnCurrentElement()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Returns the current element which the position points to  | Element |

<b><i>struts.list.erase()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
| -      | - | Erases the list and set position to zero | Boolean |


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


### Stack
A Stack is one of the most important data structures in informatics, some of the most basic problems can be solved using it.

#### Methods

<b><i>struts.stack.returnStack()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Return the stack  | Array  |

<b><i>struts.stack.insert(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   Element    | - | Insert an element on the Stack  | Boolean  |

<b><i>struts.stack.size()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Returns the stack's size  | Integer  |

<b><i>struts.stack.pullOut()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Returns an removes an element of the stack  | Element  |

<b><i>struts.stack.peek()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Returns an element of the stack but doesn't removes it | Element  |

<b><i>struts.stack.erase()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Erases all the stack's content | Boolean  |

<b><i>struts.stack.look()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Prints the current stack  | -  |

<b><i>struts.stack.exchange()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Changes the position of newest stacked element with the second newest  | Boolean  |

<b><i>struts.stack.duplicate()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Makes a copy of the newest element and put it on the stack  | Boolean  |

<b><i>struts.stack.revert()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Reverts the stack orientation and returns it  | Array  |

### Queue
A queue is an good way of structuring actions with a logical order in time.

#### Methods

<b><i>struts.queue.returnQueue()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Returns the queue  | Array  |

<b><i>struts.queue.enqueue(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   Element    | - | Insert an element in the end of the queue  | Boolean  |

<b><i>struts.queue.dequeue()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Returns and remove the first element of the queue  | Element |

<b><i>struts.queue.peek()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Returns the first element of the queue but do not removes it  | Element  |

<b><i>struts.queue.revert()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Reverts the queue's orientation  | Boolean  |


<b><i>struts.queue.logQueue()</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   -    | - | Prints the whole queue  | - |

### Singly Linked List
A Singly Linked List is a data structure in a list form, where each node of a list holds a value and a pointer¹ to the next node of the list.

¹ As in Javascript we cannot work with real pointers, this implementation simulates this behave with embedded objects.

#### Methods

<b><i>struts.sLinkedList.newList(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   element    | - | This method takes the first element for the list and creates it  | Object  |


<b><i>struts.sLinkedList.insert(element)</i></b>

| Param | Type            | Explanation      | Return      |
|:-------:|:-------------:|:-------:|:-------:|
|   element    | - | This method inserts an element in the list  | Boolean  |
