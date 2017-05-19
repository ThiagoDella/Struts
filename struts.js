/*
  Struts is a simple library for data structures in JavaScript (NodeJS).
  It was implemented by Thiago Della Libera Moreira.
  Get in touch:
    #email    : thiago.dlm@live.com
    #twitter  : @_tri
    #github   : github.com/thiagodella
    #linkedIn : https://www.linkedin.com/in/thiagodellaliberamoreira/
*/

struts = function(){};

/*
  This is a implementation of a simple list
  and its methods.
*/
struts.prototype.list = {
  list : [],
  pos: 0,
  initEmpty(size) {
    if(typeof size === "number"){
      for (var i = 0; i < size ; i++) {
        this.list.push(null);
      }
      if(size === ( this.list.length - 1 )) return true;
      else return false;
    }
    else throw new TypeError("This function is expecting a number as parameter.");
  },
  size() {
    return this.list.length;
  },
  moveBeginning(){
    this.pos = 0;
    return this.pos;
  },
  moveEnd(){
    this.pos = list.length - 1;
    return this.pos;
  },
  logList() {
    console.log(this.list.toString());
  },
  logCurrentElement() {
    console.log(this.list[this.pos]);
  },
  logCurrentPos() {
    console.log(this.pos);
  },
  forward() {
    if(this.pos < this.list.length) this.pos++;
    else throw new RangeError("Position out bounds : You've tried to set a position in list bigger then its length.");
  },
  backward() {
    if(this.pos > 0) this.pos--;
    else throw new RangeError("Position out bounds : You've tried to set a position in list smaller then its length.");
  },
  append(element) {
    if(element !== undefined){
      this.list.push(element);
      if(this.list[this.list.length - 1] === element) return true;
      else return false;
    }
    else throw new TypeError("Please provide a valid element to be inserted.");
  },
  insert(index, element) {
    if(index !== undefined || typeof index !== "number"){
      if(element !== undefined){
        if(index >= 0 && index <= this.list.length) {
          this.list.splice(index, 0, element);
          return true;
        }
        else throw new RangeError("Position out bounds : There is no position with this value inside this list.");
      }
      else throw new TypeError("Please provide an element to be inserted.");
    }
    else throw new TypeError("This function is expecting a number as index.");

  },
  insertBeginning(element) {
    if(elemente !== undefined){
      this.list.unshift(element);
      if(this.list[0] === element) return true;
      else return false;
    }
    else throw new TypeError("Please provide a valid element to be inserted.");
  },
  pullOut() {
    return this.list.pop();
  },
  removeElement(element) {
    if(element !== undefined){
      var indexToFind = this.list.indexOf(element);
      if(indexToFind !== -1) return this.list.splice(indexToFind, 1);
      else throw new ReferenceError("the element: " + element + " was not found.");
    }
    else throw new TypeError("Please provide an element to be removed.");
  },
  returnList(){
    return this.list;
  },
  returnCurrentElement(){
    if( this.list.length > 0 && this.list.length > this.pos) return this.list[this.pos];
    else throw new RangeError("Position out bounds : There is no position with this value inside this list.");
  },
  erase() {
    this.list = [];
    if(this.list.length === 0){
      return true;
    }
    else return false;
  }
};

/*
  This is a implementation of a stack
  and its methods
*/
struts.prototype.stack = {
  stack : [],
  returnStack(){
    return this.stack;
  },
  insert(element){
    if(element !== undefined) this.stack.push(element);
    else throw new TypeError("Please provide an elemente to be inserted.").
  },
  size(){
    return this.stack.length;
  },
  pullOut(){
    if(this.stack.length > 0 ) return this.stack.pop();
    else throw new RangeError("There is no element in Stack.");
  },
  peek(){
    if(this.size() > 0) return this.stack[this.size() - 1];
    else throw new RangeError("There is no element in Stack.");
  },
  erase(){
    this.stack = [];
    if(this.size() === 0){
      return true;
    }
    else return false;
  },
  look(){
    console.log(this.stack.toString());
  },
  exchange(){
    if(this.size() >= 2){
      var aux = this.stack[this.size() - 2];
      this.stack[this.size() - 2] = this.stack[this.size() - 1];
      this.stack[this.size() - 1] = aux;
      return true;
    }
    else throw new RangeError("There is no enough stacked elements to execute this action (min of two).");
  },
  duplicate(){
    if(this.size() > 0){
      this.stack.push(this.stack[this.stack.length - 1]);
      return true;
    }
    else throw new RangeError("There is no element in Stack.");
  },
  revert(){
    if(this.size() > 0){
      this.stack = this.stack.reverse();
      return this.returnStack();
    }
    else throw new RangeError("There is no element in Stack.");
  }
};



module.exports = new struts();
